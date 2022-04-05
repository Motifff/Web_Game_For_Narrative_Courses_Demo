import React,{useState} from "react";
import { useSpring, animated ,config} from "@react-spring/web";
import cardStyle from '../styles/card.module.css'

let scale = 1.3;
//单张卡片组件
function Card(props){
  const [focus, setFocus] = useState(true)
  const [dragging , setDragging] = useState(true)
  const [life, setLife] = useState(true)
  //bor stand for border
  const [bor,setBor] = useState(true)
  //UseSpring 是一个动画库 from是动画开始的常数， to是动画结束常数
  const size = useSpring({
    from:{
      width:focus ? 89*scale: 89,
      //三元运算符 （条件）？是：否
      height:focus ? 295*scale:295,
      opacity:dragging? 0:1
    },
    to:{
      width:focus ? (life ? 89: 0) : (life ? 89*scale : 0),
      height:focus ? 295:295*scale,
      opacity:dragging? 1:0
    },
    //这个是动画结束后调用的返回函数
    onRest:() => {
      if(!life){
        props.elim(props.w)
      }
    }
  })

  //from是动画开始的常数， to是动画开始常数
  const textSize = useSpring({
    from:{
      width:focus?'32px':'16px',
      fontSize:focus?'28px':'14px',
      lineHeight: focus?'32px':'16px',
    },
    to:{
      width:focus?'16px':'32px',
      fontSize:focus?'14px':'28px',
      lineHeight: focus?'16px':'32px',
    },
    config:config.stiff
  })

  const borderSettings = useSpring({
    from:{
      border:bor?'6px solid #F7D94C':'0px solid #E8B647',
    },
    to:{
      border:bor?'0px solid #F7D94C':'6px solid #E8B647',
    }
  })

  let area = 300
  //很简答就是在在结束后元件自杀
  const elimSelf = (e) =>{
    console.log(props.upDown)
    //检测元件位置 拖动出区域后就
    if(props.upDown==='start'?(e.clientY<window.outerHeight-area):(e.clientY>area)){
      setLife(!life)
    }
    else{
      setDragging(!dragging)
    }
  }

  //这里是一个预留的方法用于告诉 cardHolder 我正在被玩家注视 这些需要告诉服务器，来高亮对方的选择
  const markSelf = (e) =>{
    props.func(props.w)
    setFocus(!focus)
    setBor(false)
  }
  //与以上相反
  const demark = () => {
    setFocus(!focus)
    setBor(true)
  }

  //start to render here
  return(
    <div className={cardStyle.Card}>
      <animated.div
        style={{
          backgroundColor:'#46e891',
          marginLeft:life ? 10 : 0,
          marginRight:life ? 10 : 0,
          ...size
        }}
        draggable = "true"
        onMouseOver={() => markSelf()}
        onMouseOut={() => demark()}
        onDragStart = {() => setDragging(!dragging)}
        onDragEnd = {(e) => elimSelf(e)}
      >
        <animated.div
          style={{
            zIndex:1,
            position:'absolute',
            ...textSize
          
          }}
        >
          {props.w}
        </animated.div>
        <animated.div
          style={{
            ...size,
            ...borderSettings,
            boxSizing: 'border-box',
            backgroundImage:`url(${props.image})`,
            backgroundSize:'cover'
          }}
        >
        </animated.div>
      </animated.div>
    </div>
  );
}
export default Card;
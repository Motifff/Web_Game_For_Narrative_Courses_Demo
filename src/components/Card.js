import React,{useState} from "react";
import { useSpring, animated ,config} from "@react-spring/web";
import cardStyle from '../styles/card.module.css'

let scale = 1.3;
function Card(props){
  const [focus, setFocus] = useState(true)
  const [dragging , setDragging] = useState(true)
  const [life, setLife] = useState(true)
  const [bor,setBor] = useState(true)

  const size = useSpring({
    from:{
      width:focus ? 89*scale: 89,
      height:focus ? 295*scale:295,
      opacity:dragging? 0:1
    },
    to:{
      width:focus ? (life ? 89: 0) : (life ? 89*scale : 0),
      height:focus ? 295:295*scale,
      opacity:dragging? 1:0
    },
    onRest:() => {
      if(!life){
        props.elim(props.w)
      }
    }
  })

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
  const elimSelf = (e) =>{
    //console.log(window.outerHeight)
    //console.log(e.clientY)
    console.log(props.upDown)
    if(props.upDown==='start'?(e.clientY<window.outerHeight-area):(e.clientY>area)){
      setLife(!life)
    }
    else{
      setDragging(!dragging)
    }
  }

  const markSelf = (e) =>{
    props.func(props.w)
    setFocus(!focus)
    setBor(false)
  }

  const demark = () => {
    setFocus(!focus)
    setBor(true)
  }

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
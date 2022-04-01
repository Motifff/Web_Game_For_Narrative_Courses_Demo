import React,{useState} from "react";
import { useSpring, animated ,config} from "@react-spring/web";
import cardStyle from '../styles/card.module.css'

let scale = 1.3;
function Card(props){
  const [focus, setFocus] = useState(true)
  const [dragging , setDragging] = useState(true)
  const [life, setLife] = useState(true)
 
  const size = useSpring({
    from:{
      width:focus ? 89*scale: 89,
      height:focus ? 292*scale:292,
      opacity:dragging? 0:1
    },
    to:{
      width:focus ? (life ? 89: 0) : (life ? 89*scale : 0),
      height:focus ? 292:292*scale,
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

  const elimSelf = (e) =>{
    if(e.clientX>500){
      setLife(!life)
    }else{
      setDragging(!dragging)
    }
  }

  return(
    <div className={cardStyle.Card}>
    <animated.div
      style={{
        backgroundColor:'#46e891',
        borderRadius:10,
        margin:life ? 10 : 0,
        ...size
      }}
      draggable = "true"
      onMouseOver={() => setFocus(!focus)}
      onMouseOut={() => setFocus(!focus)}
      onMouseDown = {() => setDragging(!dragging)}
      onDragEnd = {(e) => elimSelf(e)}
    >
      <animated.div
        className={cardStyle.cardText}
        style={textSize}
      >
        {props.w}
      </animated.div>
    </animated.div>
    </div>
  );
}
export default Card;
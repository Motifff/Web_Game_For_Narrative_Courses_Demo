import React,{useState} from 'react'
import {animated ,useSpring} from '@react-spring/web'


function DetectZone(props){
    const [trig,setTrig] = useState(false);
    const styles = useSpring({
        from:{
            border:trig?'0px dashed #000000':'6px dashed #000000',
            background:trig?'rgba(196,196,196,0)':'rgba(196,196,196,0.5)',
            opacity:trig?0:1
        },
        to:{
            border:trig?'6px dashed #000000':'0px dashed #000000',
            background:trig?'rgba(196,196,196,0.5)':'rgba(196,196,196,0)',
            opacity:trig?1:0
        }
    })

    return(
        <div 
            style={{
                display:'flex',
                justifyContent: 'center',
                flexDirection:'column',
                alignItems:'center',
        }}>
            <animated.div
                onDragOver={()=>setTrig(true)}
                onMouseOut={()=>setTrig(false)}
                style={{
                    width:props.w,
                    height:props.h,
                    display:'flex',
                    borderRadius:20,
                    justifyContent: 'center',
                    flexDirection:'column',
                    alignItems:'center',
                    ...styles
                }}  
            >
            松开出牌
            </animated.div>
        </div>
    )
}
export default DetectZone;
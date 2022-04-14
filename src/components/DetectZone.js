import React,{useState} from 'react'
import {animated ,useSpring} from '@react-spring/web'


function DetectZone(props){
    const styles = useSpring({
        from:{
            border:props.m?'0px dashed #000000':'6px dashed #000000',
            background:props.m?'rgba(196,196,196,0)':'rgba(196,196,196,0.5)',
            opacity:props.m?0:1
        },
        to:{
            border:props.m?'6px dashed #000000':'0px dashed #000000',
            background:props.m?'rgba(196,196,196,0.5)':'rgba(196,196,196,0)',
            opacity:props.m?1:0
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
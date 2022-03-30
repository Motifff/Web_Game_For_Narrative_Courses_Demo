import React from 'react'
import { useSpring, animated } from 'react-spring'
import { rgb } from 'react-spring/node_modules/@react-spring/shared'

import '../styles/card.module.css'

class Card extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            words: "空内容",
            dWidth: props.w,
            dHeight: props.h,
            width: props.w,
            height:props.h,
        }
        
    };
    handleMouseOver = (e) =>{
        let data = Object.assign({}, this.state, {width:30,height:30})
        this.setState(data)
    }

    handleMouseOut = (e) =>{
        let data = Object.assign({}, this.state, {width:this.state.dWidth,height:this.state.dHeight})
        this.setState(data)
    }

    render(){
        return(
            <div>
                <div style={{width : this.state.width,height : this.state.height,fill:rgb(0,0,0)}}></div>
            </div>
        );
    }
}
export default Card;
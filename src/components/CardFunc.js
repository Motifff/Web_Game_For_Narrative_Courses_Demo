import React from 'react'

import '../styles/card.module.css'

class CardFunc extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            words: "空内容",
            dWidth: props.w,
            dHeight: props.h,
            width: props.w,
            height:props.h,
            isFocus:false,
        }
        
    };

    handleMouseOver = (e) =>{
        let data = Object.assign({}, this.state, {width:'20vh',height:'20vh'})
        this.setState(data)
    }

    handleMouseOut = (e) =>{
        let data = Object.assign({}, this.state, {width:'10vh',height:'10vh'})
        this.setState(data)
    }

    render(){
        return(
            <div>
                <button 
                onMouseOver={this.handleMouseOver.bind(this)}
                onMouseOut={this.handleMouseOut.bind(this)}
                style={{width : this.state.width, height : this.state.height}}>
                    what
                </button>
            </div>
        );
    }
}
export default CardFunc;
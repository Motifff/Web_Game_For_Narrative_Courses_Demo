import React from "react";
import ReactDOM from 'react-dom'

import "../../styles/matching.css"

import background1 from "../../assets/0.png"
import match1 from "../../assets/match1.png"
import match2 from "../../assets/match2.png"

class Matching extends React.Component{
    matchDisplay(){
        return(
          <div>
           <img className = 'matchPos1' src={match1}/>
           <img className = 'matchPos2' src={match1}/>
           <img className = 'matchPos3' src={match2}/>
          </div>
        )
    }
    word(){
        return(
            <div>
                <p className="wordPos1">玩 家 甲</p>
                <p className="wordPos2">玩 家 乙</p>
                <p className="wordPos3">正在匹配玩家</p>
            </div>
        )
    }
    buuttonEnter = () =>{
        console.log('haha')
    }


    render(){
        return(
           <div>
               <div style={{height:720,width:1280,backgroundImage:`url(${background1})`}}></div>
               {this.matchDisplay()}
               {this.word()}
               <button onClick={this.buttonEnter} className="buttonEnter" ></button> 
           </div>
        )
    }
}

export default Matching;
import React from "react";
import ReactDOM from 'react-dom'

import "../../styles/matching.css"

import background1 from "../../assets/0.png"
import match1 from "../../assets/match1.png"
import match2 from "../../assets/0.png"

class Matching extends React.Component{
    matchDisplay(){
        <div>
           <img className = 'matchPos1' src={match1}/>
           <img className = 'matchPos2' src={match1}/>
        </div>
    }

    render(){
        return(
           <div>
               <div style={{height:720,width:1280,backgroundImage:`url(${background1})`}}></div>
               {}
           </div>
        )
    }
}

export default Matching;
import React from "react";
import Card from "../../components/Card";
import '../../styles/win.css'
//import * as Scroll from 'react-scroll';

import backPic from "../../assets/winPic/back1.png";
import wining from "../../assets/winPic/winStat.png"
import backBlur from "../../assets/winPic/backblur.png"
import figure from "../../assets/winPic/lase.png"
import resultBack from "../../assets/winPic/resultBack.jpg"
import resultBack1 from "../../assets/winPic/resultBack1.jpg"
import resultWord from "../../assets/winPic/resultWord.png"

import c1 from "../../assets/cardPic/c1.png"
import c2 from "../../assets/cardPic/c2.png"
import c3 from "../../assets/cardPic/c3.png"
import c4 from "../../assets/cardPic/c4.png"
import c5 from "../../assets/cardPic/c5.png"
import c6 from "../../assets/cardPic/c6.png"
import c7 from "../../assets/cardPic/c7.png"
import c8 from "../../assets/cardPic/c8.png"
import c9 from "../../assets/cardPic/c9.png"
import c10 from "../../assets/cardPic/c10.png"
import c11 from "../../assets/cardPic/c11.png"
import c12 from "../../assets/cardPic/c12.png"

const dict = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]

class Win extends React.Component{
    constructor(props){
        super(props)
    }

    yWheel(e){
      e.preventDefault();
      e.currentTarget.scrollLeft += e.deltaY;
    }

    notUsing = () =>{
      console.log("used")
      return false;
    }
    
    static(){
        return(
         <div>
           <img className = 'backBlur' src={backBlur}/>
           <img className = 'figure' src={figure}/>
           <img className = 'win1' src={wining}/>

           <div>
             <img className = 'resultBack' src={resultBack}/>
             <img className = 'resultBack1' src={resultBack1}/>
             <img className = 'resultWord' src={resultWord}/>
           </div>

         </div>

        )
    }

    render(){
        const cardsGen = this.props.word.map(
          (item,key) => {
            return(<Card 
                key={item} w={item} 
                elim={()=>this.notUsing} 
                upDown={'start'} 
                highlight={false}
                func = {()=>this.notUsing}
                image = {dict[key]}
                mode = {0}
            />)
          }
        )
        return(
            <div> 
              <div style={{height:720,width:1280,backgroundImage:`url(${backPic})`}}></div> 
                {this.static()}
              <div 
                style={{
                  position: 'absolute',
                  left: '253px',
                  top: '325px',
                  height: '295px',
                  width: '793px',
                  display: 'flex',
                  overflow: 'hidden',
                  overflowY:'auto',
                  justifyContent: 'space-between',
                  flexDirection:"row",
                  alignItems:'start'
                }} 
                onWheel={this.yWheel}
              >
                {cardsGen}
              </div>
            </div>

        )
    }
}
export default Win;
import React from "react";
import ReactDOM from 'react-dom'
import "../../styles/result.css"
//import * as Scroll from 'react-scroll';

import backPic from "../../assets/main-page/112.png";
import wining from "../../assets/main-page/1.png"
import backBlur from "../../assets/main-page/backblur.png"
import figure from "../../assets/main-page/lase.png"
import resultBack from "../../assets/main-page/resultBack.jpg"
import resultBack1 from "../../assets/main-page/resultBack1.jpg"
import resultWord from "../../assets/main-page/resultWord.png"
import pageNew1 from "../../assets/main-page/page1.png"

import card0 from "../../assets/c0.png"

import card1 from "../../assets/main-page/c1.png"
import card2 from "../../assets/main-page/c2.png"
import card3 from "../../assets/main-page/c3.png"
import card4 from "../../assets/main-page/c4.png"
import card5 from "../../assets/main-page/c5.png"
import card6 from "../../assets/main-page/c6.png"
import card7 from "../../assets/main-page/c7.png"
import card8 from "../../assets/main-page/c8.png"
import card9 from "../../assets/main-page/c9.png"
import card10 from "../../assets/main-page/c10.png"
import card11 from "../../assets/main-page/c11.png"
import card12 from "../../assets/main-page/c12.png"

import win1 from "../../assets/main-page/win.png"

class Win extends React.Component{
    state={
      poemList:[
        {id: 1,content:'滚滚长江东似水'},//实传value
        {id: 2,content:'滚滚长江东似水2'},
        {id: 3,content:'滚滚长江东似水3'},
        {id: 4,content:'滚滚长江东似水4'},
        {id: 5,content:'滚滚长江东似水5'},
        {id: 6,content:'滚滚长江东似水6'},
        {id: 7,content:'滚滚长江东似水7'},
        {id: 8,content:'滚滚长江东似水8'},
        {id: 9,content:'滚滚长江东似水9'},
        {id: 10,content:'滚滚长江东似水10'},
        {id: 11,content:'滚滚长江东似水11'},
        {id: 12,content:'滚滚长江东似水12'},
      ],
      judge:false,
    }

    /*handleScroll=(e)=>{
      const delta = Math.max(-1, Math.min(1, (e.nativeEvent.wheelDelta || -e.nativeEvent.detail)))
      e.currentTarget.scrollLeft -= (delta * 30)
      e.preventDefault
    }*/
    
    /*handleScroll(){
        let container = document.querySelector(".container");
        this.container.addEventListener("wheel",(e)=>{e.preventDefault();
        this.container.scrollLeft += e.deltaY;
      })
    }*/

    yWheel(e){
      e.preventDefault();
      e.currentTarget.scrollLeft += e.deltaY;
      
    }

    /*poems(){
      return(
        <div>*/
         /*<div className= 'word1'>滚滚长江东逝水</div>*/
         /*<ul className="font">
              {
                this.state.poemList.map(item =>(
                  <li key={item.id}>
                    <p className= {'word'+item.id}>{item.content}</p>
                  </li>
                ))
              }
          </ul>
        </div>
      )
    }*/

    clickEvent=()=>{
      this.setState({
        judge:true,
      })
    }

    judgement(){
      return this.state.judge === true
                   //点击进入弹窗之后的组件
                  ?(<div>
                     
                  </div>)
                  :(<div>

                  </div>)
    }

    showImg(){
      return(
        <div className="card0">
              <img src={card0} className="page1"/>
              <p className="resultPoem">两个黄鹂鸣翠柳</p>
              <button onClick={null} className=""></button>
        </div>
      )
    }

    scroll(){
      /*const container={
        position: 'absolute',
        left: '253px',
        top: '325px',
        height: '201px',
        width: '793px',
        display: 'flex',
        overflow: 'scroll',
      }
      const page1 = {
        width: '280px',
        height: '201px',
        
        background: 'hsl(140deg,50%,50%)',
      }
      const page2 = {
        width: '280px',
        height: '201px',
        background: 'hsl(210deg,50%,50%)',
      }
      const page3 = {
        width: '280px',
        height: '201px',
        background: 'hsl(270deg,50%,50%)',
      }*/
      return(
        <div className="container" onWheel={this.yWheel}>
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
            {this.showImg()}
           
        </div>
      
      )
    }
    
    /*scroll(){
      let container = document.querySelector(".container");
      container.addEventListener("wheel",(event)=>{
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      })
      return(
        
        <div className="container">
            <div className="page1">page1</div>
            <div className="page2">page1</div>
            <div className="page3">page1</div>
            <div className="page1">page1</div>
            <div className="page2">page1</div>
        </div>
      )
    }*/

    static(){
        return(
         <div>
           <img className = 'backBlur' src={backBlur}/>
           <img className = 'figure' src={figure}/>
           
           <img className = 'pageNew1' src={pageNew1}/>
           {/*<div>
             <img className = 'resultBack' src={resultBack}/>
             <img className = 'resultBack1' src={resultBack1}/>
             <img className = 'resultWord' src={resultWord}/>
           </div>*/}
           
           {/*<Table scroll={{ x: 1200}}/>*/}
           {/*<div onWheel={(e) => this.handleScroll(e)}>内容</div>*/}

         </div>

        )
    }

    render(){

        return(
            <div>
               
               <div style={{height:720,width:1280,backgroundImage:`url(${backPic})`}}></div> 
               {this.static()}
               <img className="win" src={win1}></img>
               {this.scroll()}
               
            </div>

        )
    }
}



export default Win;
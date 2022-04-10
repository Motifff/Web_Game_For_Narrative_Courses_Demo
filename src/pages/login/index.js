import React from "react";
import ReactDOM from 'react-dom'
import "../../styles/index.css"
//import PressInput from './pressInput.js';

import upside from "../../assets/up2.png"
import background1 from "../../assets/0.png"
import background2 from "../../assets/back2.png"
import button1 from "../../assets/4.png"
import button2 from "../../assets/3.png"


import card0 from "../../assets/c0.png"
import button4 from "../../assets/match2.png"

import ball from "../../assets/ballBack.png"
import rightTag from "../../assets/rightTag.png"
import wordA from "../../assets/wordA.png"

class SelectPage extends React.Component{

  //初始化状态
  state = {
      comments:[
          {id: 1,name: '百日衣衫尽'},
          {id: 2,name: '一二三四歌'},
          {id: 3,name: '远上寒山石经斜'}
      ],

      //评论人
      userName:'',
      //评论内容
  }
  //处理表单元素
  addComment = (e) => {
    const {name , value} = e.target
    this.setState({
      [name]:value
    })
  }

  upload = () =>{
    const {comments,userName} = this.state

    const newComments = [{
      id:Math.random(),
      name:userName},...comments]
    
    
    this.setState({
      comments : newComments
    })
    console.log(comments)  
  }

  renderList(){
    return this.state.comments.length === 0
              ?(<div className="no-comment">暂无评论</div>) 
              :(<ul>
                {
                  this.state.comments.map(item =>(
                    <li key={item.id}>
                      <h3>评论人:{item.name}</h3>
                    </li>
                  ))
                }
              </ul>)
  }
  cards(){
    return(
      <div>
        <img className = 'c1' src={card0}/>
        <img className = 'b1' src={ball}/>
        <img className = 'c2' src={card0}/>
        <img className = 'b2' src={ball}/>
        <img className = 'c3' src={card0}/>
        <img className = 'b3' src={ball}/>
        <img className = 'c4' src={card0}/>
        <img className = 'b4' src={ball}/>
        <img className = 'c5' src={card0}/>
        <img className = 'b5' src={ball}/>
        <img className = 'c6' src={card0}/>
        <img className = 'b6' src={ball}/>
        <img className = 'c7' src={card0}/>
        <img className = 'b7' src={ball}/>
        <img className = 'c8' src={card0}/>
        <img className = 'b8' src={ball}/>
        <img className = 'c9' src={card0}/>
        <img className = 'b9' src={ball}/>
        <img className = 'c10' src={card0}/>
        <img className = 'b10' src={ball}/>
        <img className = 'c11' src={card0}/>
        <img className = 'b11' src={ball}/>
        <img className = 'c12' src={card0}/>
        <img className = 'b12' src={ball}/>
        <div className="fontBall">
          <p className="d1">1</p>
          <p className="d2">2</p>
          <p className="d3">3</p>
          <p className="d4">4</p>
          <p className="d5">5</p>
          <p className="d6">6</p>
          <p className="d7">7</p>
          <p className="d8">8</p>
          <p className="d9">9</p>
          <p className="d10">10</p>
          <p className="d11">11</p>
          <p className="d12">12</p>
        </div>
      </div>

    )
  }

  render(){
      const {userName} = this.state
      return(
          <div className="app">
            <div style={{height:720,width:1280,backgroundImage:`url(${background1})`}}></div>
            <img className = 'back2' src={background2}/>
            {this.cards()}
            <img className = 'button4' src={button4}/>
            <img className = 'rightTag' src={rightTag}/>
            <img className = 'wordA' src={wordA}/>
            
            {/*<img className = 'up1' src={upside}/>
            <img className = 'button1' src={button1}/>
            <img className = 'button2' src={button2}/>*/}
            
            
          </div>
      )

  }
}

export default SelectPage;

//渲染react元素document.getElementById('root')
//ReactDOM.render(<App/>,document.getElementById('root'))
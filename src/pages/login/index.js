import React from "react";
import ReactDOM from 'react-dom'
import "../../styles/index.css"
//import PressInput from './pressInput.js';

import upside from "../../assets/up2.png"
import background1 from "../../assets/0.png"
import button1 from "../../assets/4.png"
import button2 from "../../assets/3.png"


import card1 from "../../assets/c1.png"
import card2 from "../../assets/c2.png"
import card3 from "../../assets/c3.png"
import card4 from "../../assets/c4.png"
import card5 from "../../assets/c5.png"
import card6 from "../../assets/c6.png"
import card7 from "../../assets/c7.png"
import card8 from "../../assets/c8.png"
import card9 from "../../assets/c9.png"
import card10 from "../../assets/c10.png"
import card11 from "../../assets/c11.png"
import card12 from "../../assets/c12.png"


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
        <img className = 'c1' src={card1}/>
        <img className = 'c2' src={card2}/>
        <img className = 'c3' src={card3}/>
        <img className = 'c4' src={card4}/>
        <img className = 'c5' src={card5}/>
        <img className = 'c6' src={card6}/>
        <img className = 'c7' src={card7}/>
        <img className = 'c8' src={card8}/>
        <img className = 'c9' src={card9}/>
        <img className = 'c10' src={card10}/>
        <img className = 'c11' src={card11}/>
        <img className = 'c12' src={card12}/>
      </div>
    )
  }

  render(){
      const {userName} = this.state
      return(
          <div className="app">
            <div style={{height:720,width:1280,backgroundImage:`url(${background1})`}}></div>
            {this.cards()}
            
            <div>

              <input className='user' type='text' placeholder="输入" value = {userName} name = 'userName'
              onChange={this.addComment}/>
              <br/>
              <button onClick={this.upload}>你的诗词</button>
            </div>
            
            {this.renderList()}
            <img className = 'up1' src={upside}/>
            <img className = 'button1' src={button1}/>
            <img className = 'button2' src={button2}/>
            
            
          </div>
      )

  }
}

export default SelectPage;

//渲染react元素document.getElementById('root')
//ReactDOM.render(<App/>,document.getElementById('root'))

import React from "react";
import ReactDOM from 'react-dom'
import "../../styles/indexMain.css"

import background1 from "../../assets/main-page/back1.png"


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

import card1a from "../../assets/main-page/c1.png"
import card2a from "../../assets/main-page/c2.png"
import card3a from "../../assets/main-page/c3.png"
import card4a from "../../assets/main-page/c4.png"
import card5a from "../../assets/main-page/c5.png"
import card6a from "../../assets/main-page/c6.png"
import card7a from "../../assets/main-page/c7.png"
import card8a from "../../assets/main-page/c8.png"
import card9a from "../../assets/main-page/c9.png"
import card10a from "../../assets/main-page/c10.png"
import card11a from "../../assets/main-page/c11.png"
import card12a from "../../assets/main-page/c12.png"


class MainPage extends React.Component{

  //初始化状态
  state = {
      comments:[
          {id: 1,name: 'jack',content: '第一'},
          {id: 2,name: 'Mike',content: '不是第一'},
          {id: 3,name: 'Zhou',content: '只有第三'}
      ],

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

        {id: 13,content:'滚滚长江东似水'},//实传value
        {id: 14,content:'滚滚长江东似水2'},
        {id: 15,content:'滚滚长江东似水3'},
        {id: 16,content:'滚滚长江东似水4'},
        {id: 17,content:'滚滚长江东似水5'},
        {id: 18,content:'滚滚长江东似水6'},
        {id: 19,content:'滚滚长江东似水7'},
        {id: 20,content:'滚滚长江东似水8'},
        {id: 21,content:'滚滚长江东似水9'},
        {id: 22,content:'滚滚长江东似水10'},
        {id: 23,content:'滚滚长江东似水11'},
        {id: 24,content:'滚滚长江东似水12'},

      ],

      //评论人
      userName:'',
      //评论内容
      userContent:''
  }
  //处理表单元素
  addComment = (e) => {
    const {name , value} = e.target
    this.setState({
      [name]:value
    })
  }

  upload = () =>{
    const {comments,userContent,userName} = this.state

    const newComments = [{
      id:Math.random(),
      name:userName,
      content:userContent},...comments]
    
    this.setState({
      comments : newComments
    })
  }

  renderList(){
    return this.state.comments.length === 0
              ?(<div className="no-comment">暂无评论</div>) 
              :(<ul>
                {
                  this.state.comments.map(item =>(
                    <li key={item.id}>
                      <p>评论内容:{item.content}</p>
                    </li>
                  ))
                }
              </ul>)
  }
  cards(){
    return(
      <div>
        <div className = 'up'>
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

        <div className = 'down'>
         <img className = 'c1a' src={card1a}/>
         <img className = 'c2a' src={card2a}/>
         <img className = 'c3a' src={card3a}/>
         <img className = 'c4a' src={card4a}/>
         <img className = 'c5a' src={card5a}/>
         <img className = 'c6a' src={card6a}/>
         <img className = 'c7a' src={card7a}/>
         <img className = 'c8a' src={card8a}/>
         <img className = 'c9a' src={card9a}/>
         <img className = 'c10a' src={card10a}/>
         <img className = 'c11a' src={card11a}/>
         <img className = 'c12a' src={card12a}/>
        </div>
      </div>
      
    )
  }

  poems(){
    return(
      <div>
       {/*<div className= 'word1'>滚滚长江东逝水</div>*/}
       <ul className="font">
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
  }

  render(){
      const {userName,userContent} = this.state
      return(
          <div className="app">
            <div style={{height:720,width:1280,backgroundImage:`url(${background1})`}}></div>
            
            
            
            
            {this.renderList()}
            {this.cards()}
            {this.poems()}
            
          </div>
      )

  }
}
 export default MainPage;


//渲染react元素document.getElementById('root')
//ReactDOM.render(<App/>,document.getElementById('root'))
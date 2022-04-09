
import React, { Component } from 'react';
import '../../styles/PressInput.css'
import img2 from '../../assets/c1.png'
//import Zmage from 'react-zmage'
import "../../styles/index.css"
import card3 from "../../assets/c3.png"
import button1 from "../../assets/4.png"
import backPrint1 from "../../assets/back1.png"
import backBlur from "../../assets/backblur.jpg"
import new1 from "../../assets/new1.png"
import new2 from "../../assets/new2.png"
import wen from "../../assets/5.png"
import new3 from "../../assets/new.png"
import buttonFalse from "../../assets/newring.png"
import buttonTrue from "../../assets/newring2.png"



class PressInput extends Component {
    state={
        judge : false,

        judge1: false,
        judge2: false,
        judge3: false,
        judge4: false,
        judge5: false,
        judge6: false,
        judge7: false,
        poem : [
            {id:1,value:''},
            {id:2,value:''},
            {id:3,value:''},
            {id:4,value:''},
            {id:5,value:''},
            {id:6,value:''},
            {id:7,value:''},
            {id:8,value:''},
            {id:9,value:''},
            {id:10,value:''},
            {id:11,value:''},
            {id:12,value:''},
        ],
        number : null,
        
        comments:[
            {id: 1,name: '百日衣衫尽'},
            {id: 2,name: '一二三四歌'},
            {id: 3,name: '远上寒山石经斜'}
        ],//评论人
        userName:'',
        //评论内容
        
        wordList:[
            {id: 1,content: '两个黄鹂鸣翠柳'},
            {id: 2,content: '一行白鹭上青天'},
            {id: 3,content: '三个黄鹂鸣翠柳'},
            {id: 4,content: '四个黄鹂鸣翠柳'},
            {id: 5,content: '五个黄鹂鸣翠柳'},
            {id: 6,content: '六个黄鹂鸣翠柳'},
            {id: 7,content: '七个黄鹂鸣翠柳'},
        ],

    }
    clickPage = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 1
        })
    }
    clickPage2 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 2
        })
    }
    clickPage3 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 3
        })
    }
    clickPage4 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 4
        })
    }
    clickPage5 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 5
        })
    }
    clickPage6 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 6
        })
    }
    clickPage7 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 7
        })
    }
    clickPage8 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 8
        })
    }
    clickPage9 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 9
        })
    }
    clickPage10 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 10
        })
    }
    clickPage11 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 11
        })
    }
    clickPage12 = () =>{
        const {judge} = this.state
        this.setState({
            judge : true,
            number : 12
        })
    }


    clickBack = () =>{
        const {judge} = this.state
        
        this.setState({
            judge : false
        })
    }
    judgeClicker1 = () =>{
        const {number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下
        this.setState({
            judge1 : true,judge3 :false,judge4 :false,judge5 :false,judge6 :false,judge7 :false,
            judge2 : false,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "两个黄鹂鸣翠柳"}:item)

        })
    }
    judgeClicker2 = () =>{
        const {number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下
        this.setState({
            judge1 : false,judge3 :false,judge4 :false,judge5 :false,judge6 :false,judge7 :false,
            judge2 : true,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "一行白鹭上青天"}:item)
        })
    }
    judgeClicker3 = () =>{
        const {number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下
        
        this.setState({
            judge1 : false,judge2 :false,judge4 :false,judge5 :false,judge6 :false,judge7 :false,
            judge3 : true,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "三行白鹭上青天"}:item)
        })
    }
    judgeClicker4 = () =>{
        const {number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下
        
        this.setState({
            judge1 : false,judge2 :false,judge3 :false,judge5 :false,judge6 :false,judge7 :false,
            judge4 : true,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "四行白鹭上青天"}:item)
        })
    }
    judgeClicker5 = () =>{
        const {number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下
        
        this.setState({
            judge1 : false,judge2 :false,judge3 :false,judge4 :false,judge6 :false,judge7 :false,
            judge5 : true,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "五行白鹭上青天"}:item)
        })
    }
    judgeClicker6 = () =>{
        const {number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下
        
        this.setState({
            judge1 : false,judge2 :false,judge3 :false,judge4 :false,judge5 :false,judge7 :false,
            judge6 : true,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "六行白鹭上青天"}:item)
        })
    }
    judgeClicker7 = () =>{
        const {number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下
        
        this.setState({
            judge1 : false,judge2 :false,judge3 :false,judge4 :false,judge5 :false,judge6 :false,
            judge7 : true,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "七行白鹭上青天"}:item)
        })
    }
    

    clickBackpoem = () =>{
        const {judge,number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下

        this.setState({
            judge : false,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "两个黄鹂鸣翠柳"}:item)
        })
    }
    clickBackpoem1 = () =>{
        const {judge,number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下

        this.setState({
            judge : false,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "一行白鹭上晴天"}:item)
        })
    }
    clickBackpoem2 = () =>{
        const {judge,number} = this.state
        const poem = [...this.state.poem];   //浅拷贝一下

        this.setState({
            judge : false,
            poem : poem.map((item,key)=>item.id == number?{...item,name: "孤帆远影碧空尽"}:item)
            
        })
    }
    
    addComment = (e) => {
        const {name , value} = e.target
        this.setState({
          [name]:value
        })
      }
    
    /*upload = () =>{
        const {comments,userName} = this.state
    
        const newComments = [{
          id:Math.random(),
          name:userName},...comments]
        
        
        this.setState({
          comments : newComments
        })
        console.log(comments)  
    }*/

    renderImage(){
        const number = this.state
        const poem = [...this.state.poem];   //浅拷贝一下
        return this.state.judge === true
                   //点击进入弹窗之后的组件
                  ?(<div>
                      <div className='blur'/>
                      <img className='new2' src={wen}/>
                      <img className='new1' src={new1}/>
                      <img className='new3' src={new2}/>
                      <img className='new' src={new3}/>
                      
                      <div className='buttonFont'>
                         <p className='buttonPos1'>推荐</p>
                         <p className='buttonPos2'>确认</p>
                         
                      </div>
                      <div className='wordList'>
                          <p className='buttonPos3'>选择诗词卡牌</p>
                          {this.state.wordList.map(item =>(
                            <li key={item.id}>
                              <p className= {'wordPos'+item.id}>{item.content}</p>
                            </li>
                          ))
                          }
                   
                      </div>
                    
                      <div className='buttonImage'>
                          <img className='buttonImg1' src={buttonFalse}/>
                          <img className='buttonImg2' src={buttonFalse}/>
                          <img className='buttonImg3' src={buttonFalse}/> 
                          <img className='buttonImg4' src={buttonFalse}/> 
                          <img className='buttonImg5' src={buttonFalse}/> 
                          <img className='buttonImg6' src={buttonFalse}/> 
                          <img className='buttonImg7' src={buttonFalse}/>  

                      </div>
                      <div className='transButton'>
                          <button onClick={this.judgeClicker1} className= 'buttonP1'></button>
                          <button onClick={this.judgeClicker2} className= 'buttonP2'></button>
                          <button onClick={this.judgeClicker3} className= 'buttonP3'></button>
                          <button onClick={this.judgeClicker4} className= 'buttonP4'></button>
                          <button onClick={this.judgeClicker5} className= 'buttonP5'></button>
                          <button onClick={this.judgeClicker6} className= 'buttonP6'></button>
                          <button onClick={this.judgeClicker7} className= 'buttonP7'></button>
                          <button onClick={this.clickBack} className= 'buttonP8'></button>
                          <button onClick={this.clickBack} className= 'buttonP9'></button>
                      </div>
                      
                      {this.state.judge1 === true
                            ?(<div>
                                <img className='buttonImg1' src={buttonTrue}/>
                              </div> 
                            )
                            :(<div></div>)
                      }
                      {this.state.judge2 === true
                            ?(<div>
                                <img className='buttonImg2' src={buttonTrue}/>
                              </div> 
                            )
                            :(<div></div>)
                      }
                      {this.state.judge3 === true
                            ?(<div>
                                <img className='buttonImg3' src={buttonTrue}/>
                              </div> 
                            )
                            :(<div></div>)
                      }
                      {this.state.judge4 === true
                            ?(<div>
                                <img className='buttonImg4' src={buttonTrue}/>
                              </div> 
                            )
                            :(<div></div>)
                      }
                      {this.state.judge5 === true
                            ?(<div>
                                <img className='buttonImg5' src={buttonTrue}/>
                              </div> 
                            )
                            :(<div></div>)
                      }
                      {this.state.judge6 === true
                            ?(<div>
                                <img className='buttonImg6' src={buttonTrue}/>
                              </div> 
                            )
                            :(<div></div>)
                      }
                      {this.state.judge7 === true
                            ?(<div>
                                <img className='buttonImg7' src={buttonTrue}/>
                              </div> 
                            )
                            :(<div></div>)
                      }

                    </div>)
                    //没有进入弹窗的组件
                  :this.transButton()
      }
    transButton(){
        return(
          <div className='transButton'>  //没有进入前的按钮 还需要实现 不同按键编辑不同id的数组
            <button onClick={this.clickPage}  className = 'c1' ></button>
            <button onClick={this.clickPage2}  className = 'c2' ></button>
            <button onClick={this.clickPage3}  className = 'c3' ></button>
            <button onClick={this.clickPage4}  className = 'c4' ></button>
            <button onClick={this.clickPage5}  className = 'c5' ></button>
            <button onClick={this.clickPage6}  className = 'c6' ></button>
            <button onClick={this.clickPage7}  className = 'c7' ></button>
            <button onClick={this.clickPage8}  className = 'c8' ></button>
            <button onClick={this.clickPage9}  className = 'c9' ></button>
            <button onClick={this.clickPage10}  className = 'c10' ></button>
            <button onClick={this.clickPage11}  className = 'c11' ></button>
            <button onClick={this.clickPage12}  className = 'c12' ></button>
          </div>
        )
    }

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

    /*inPut(){
        const {userName} = this.state
        return this.state.judge === true
            ?(<div>

              <textarea className='user' type='text' placeholder="输入你的诗词" value = {userName} name = 'userName'
              onChange={this.addComment}/>
              <br/>
              <button onClick={this.upload}>你的诗词</button>
            </div>)
            :(<img src=' ' className=''></img>)
    }*/
    monitor(){
        return(<ul>
            {
            this.state.poem.map(item =>(
              <li key={item.id}>
                <h3>评论人:{item.name}</h3>
              </li>
            ))
            }
        </ul>)
        
    }
    display(){
        return(
          <div className='font1'>{
            this.state.poem.map(item =>(
              <li key={item.id}>
                <p className={'poem'+item.id}>{item.name}</p>
                
              </li>
              ))}    
          </div>
        )
    }
	render() {
		return (
           <div>
			  
             <button onClick={this.upload}>你的诗词</button>
             {this.display()}
             {this.renderImage()}
             {this.monitor()}
             {/*this.inPut()*/}            
           </div>
		);
	}
}
 
export default PressInput;

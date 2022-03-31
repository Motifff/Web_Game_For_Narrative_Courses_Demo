
import React, { Component } from 'react';
import '../../styles/PressInput.css'
import img2 from '../../assets/c1.png'
//import Zmage from 'react-zmage'
import "../../styles/index.css"
import card3 from "../../assets/c3.png"
import button1 from "../../assets/4.png"
import backPrint1 from "../../assets/back1.png"
import backBlur from "../../assets/backblur.jpg"


class PressInput extends Component {
    state={
        judge : false,
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
        return this.state.judge === true
                   
                  ?(<ul >
                      <img className = 'backBlur' src={backBlur}/>
                      <img className = 'c03' src={card3}/>
                      <img className = 'button1' src={button1}/>
                      <img className = 'backPrint' src={backPrint1}/>

                      <div className='buttonTag'>
                        <button onClick={this.clickBackpoem} className = 'buttonTag1' ></button>
                        <button onClick={this.clickBackpoem1} className = 'buttonTag2' ></button>
                        <button onClick={this.clickBackpoem2} className = 'buttonTag3' ></button>
                      </div>
                      <div className = 'font1'>
                         <div className= 'select1'>两个黄鹂鸣翠柳</div> //内容需要可调换  要解决不能点击的问题
                         <div className= 'select2'>一行白鹭上青天</div>
                         <div className= 'select3'>孤帆远影碧空尽</div>
                      </div>
                      
                      <div className='transButton'>
                        <button onClick={this.clickBack} className = 'button1' ></button>
                        
                      </div>
                  </ul>)
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
             
           </div>
		);
	}
}
 
export default PressInput;

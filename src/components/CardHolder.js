import React,{useState} from "react";
import cardStyle from '../styles/card.module.css'
import Card from "./Card";

class CardHolder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            word : ['测试1','测试2','测试3','测试4','测试5','测试6']
        }
    }

    destroy = (myName) =>{
        let edit = this.state.word
        console.log(myName)
        console.log(edit.indexOf(myName))
        edit.splice(edit.indexOf(myName),1)
        console.log(edit)
        this.setState({
            word:edit
        })
    }

    render(){
        const listRender = this.state.word.map((item,key)=>
        {
            return(
                <Card key={item} w={item} elim={this.destroy}/>
            )
        }
        )
        return(
            <div style={{display:"flex",flexDirection:"row",height:292}}>
                {listRender}
            </div>
        )
    }
}
export default CardHolder;
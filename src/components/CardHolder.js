import React from "react";
import Card from "./Card";
import c1 from '../assets/cardPic/c1.png'
import c2 from '../assets/cardPic/c2.png'
import c3 from '../assets/cardPic/c3.png'
import c4 from '../assets/cardPic/c4.png'
import c5 from '../assets/cardPic/c5.png'
import c6 from '../assets/cardPic/c6.png'
import c7 from '../assets/cardPic/c7.png'
import c8 from '../assets/cardPic/c8.png'
import c9 from '../assets/cardPic/c9.png'
import c10 from '../assets/cardPic/c10.png'
import c11 from '../assets/cardPic/c11.png'
import c12 from '../assets/cardPic/c12.png'

const dict = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]

//用了class的方式写的组件 主要原因是state成分比较复杂（just lazy）
class CardHolder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            word : ['测试1','测试2','测试3','测试4','测试5','测试6'],
            lit: ''
        }
    }

    mark = (myName) =>{
        let highLighted = myName
        let edit = this.state.word
        this.setState({
            word:edit,
            lit:highLighted
        })
    }

    destroy = (myName) =>{
        let edit = this.state.word
        let highLighted = this.state.lit
        edit.splice(edit.indexOf(myName),1)
        this.setState({
            word:edit,
            lit:highLighted
        })
    }

    render(){
        const listRender = this.state.word.map(
            (item,key)=>{
                //map函数来连续创建卡牌
                return(
                    <Card 
                        key={item} w={item} 
                        elim={this.destroy} 
                        upDown={this.props.d} 
                        highlight={item===this.state.lit}
                        func = {()=>this.mark()}
                        image = {dict[key]}
                    />
                );
            }
        )
        return(
            <div style={{display:"flex",flexDirection:"row",alignItems:this.props.d,height:'295'}}>
                {listRender}
            </div>
        )
    }
}
export default CardHolder;
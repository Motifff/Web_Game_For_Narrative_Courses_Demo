import React from "react";
import Card from "./Card";



//用了class的方式写的组件 主要原因是state成分比较复杂（just lazy）
class CardHolder extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const listRender = this.props.word.map(
            (item,key)=>{
                //map函数来连续创建卡牌
                return(
                    <Card 
                        key={item} w={item}
                        num = {this.props.num}
                        //自我消灭部分 
                        destroy={this.props.destroy}
                        //这张卡是上靠还是下靠 
                        upDown={this.props.d}
                        //此张卡当前需不需要高亮 (boolean) 向下传递 应当只听从系统 
                        border={this.props.isHighLight?(this.props.order===this.props.num?(this.props.which===key):false):false}
                        //向上的信息传递，可以再拿到上层
                        mark = {this.props.mark}
                        //给一张图
                        image = {this.props.image[key]}
                        //0是 1是卡片检测区模式
                        mode = {1}
                        canDrag = {true}
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
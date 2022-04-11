import React from 'react'
import CardHolder from '../../components/CardHolder';
import DetectZone from '../../components/DetectZone';
import axios from 'axios';

import c1 from '../../assets/cardPic/c1.png'
import c2 from '../../assets/cardPic/c2.png'
import c3 from '../../assets/cardPic/c3.png'
import c4 from '../../assets/cardPic/c4.png'
import c5 from '../../assets/cardPic/c5.png'
import c6 from '../../assets/cardPic/c6.png'
import c7 from '../../assets/cardPic/c7.png'
import c8 from '../../assets/cardPic/c8.png'
import c9 from '../../assets/cardPic/c9.png'
import c10 from '../../assets/cardPic/c10.png'
import c11 from '../../assets/cardPic/c11.png'
import c12 from '../../assets/cardPic/c12.png'


class InGame extends React.Component{
    constructor(props){
        super(props)
        this.state={
            word:[
                ['测试1', '测试2', '测试3', '测试4', '测试5', '测试6'], 
                ['测试1', '测试2', '测试3', '测试4', '测试5', '测试6']
            ],
            image:[
                [c1,c2,c3,c4,c5,c6],
                [c7,c8,c9,c10,c11,c12]
            ],
            isHighlight:true,
            Order:0,
            //这是哪一组
            Which:2,
            //这是哪一个
            state:'wait'
        }
    }
    
    componentDidMount() {
        this.initFromServer()
        this.timer = setInterval(() => {
            if(this.state==='gaming'){
                this.update()
            }
        }, 50);
    }

    componentWillUnmount(){
        if( this.timer!== null) {
            clearInterval(this.timer);
        }
    }

    async initFromServer (){
        axios.get( 'http://127.0.0.1:8000/inGame/init')
        .then( 
            res => {
                this .setState({
                    word:res.data.words,
                    state:res.data.state,
                }, () => console .log(this.state.word))
                console .log(res)
            })
        .catch( err => console .log( "Couldn't fetch data. Error: " + err))
    }

    async update(){
        axios.get( 'http://127.0.0.1:8000/inGame/getStat')
        .then( 
            res => {
                this .setState({
                    word:res.data.words,
                    image:this.state.image,
                    isHighlight:res.data.isHighLight,
                    Order:res.data.order,
                    Which:res.data.witch,
                }, () => console .log(this.state.word))
            })
        .catch( err => console .log( "Couldn't fetch data. Error: " + err))
    }


    async movement(order,which,mode){
        let pics = this.state.image
        axios.get('http://127.0.0.1:8000/inGame/move/?num='+order+'&pos='+which+'&mode='+mode)
        .then( 
            res => {
                this .setState({
                    word:res.data.words,
                    image:this.state.image,
                    isHighlight:res.data.isHighLight,
                    Order:res.data.order,
                    Which:res.data.which,
                }, () => console .log(this.state))
            })
        .catch( err => console .log( "Couldn't fetch data. Error: " + err))
    }

    mark = async(myName,num) =>{
        let edit = this.state.word[num]
        this.movement(num,edit.indexOf(myName),'mark')
    }

    destroy = async(myName,num) =>{
        let edit = this.state.word
        let ord = edit[num].indexOf(myName)
        edit[num].splice(ord,1)
        this.setState({
            word:edit,
            image:this.state.image,
            isHighlight:this.state.isHighLight,
            Order:this.state.Order,
            Which:this.state.Which,
        })
        this.movement(num,ord,'del')
    }

    render(){
        return(
            <div width='100vw' height='100vh' style={{display:'flex',flexDirection:'column'}}>
                <div style={{height:'30vh',display:'flex',alignItems:'start',justifyContent: 'center'}}>
                    <CardHolder   
                        num = {0}
                        word={this.state.word[0]} 
                        isHighLight={this.state.isHighlight} 
                        which = {this.state.Which}
                        order={this.state.Order}  
                        mark = {this.mark}
                        destroy = {this.destroy}
                        image = {this.state.image[0]}
                        d='start'
                    />
                </div>
                <DetectZone w='40vw' h='40vh'/>
                <div style={{height:'30vh',display:'flex',justifyContent: 'center',alignItems:'end'}}>
                    <CardHolder 
                        num = {1}
                        word={this.state.word[1]} 
                        isHighLight={this.state.isHighlight} 
                        which = {this.state.Which}
                        order={this.state.Order} 
                        mark = {this.mark}
                        destroy = {this.destroy} 
                        image = {this.state.image[1]}
                        d='end'/>
                </div>
            </div>
        )
    }
}
export default InGame;
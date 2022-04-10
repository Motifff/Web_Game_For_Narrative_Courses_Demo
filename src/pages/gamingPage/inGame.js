import React,{useState} from 'react'
import CardHolder from '../../components/CardHolder';
import DetectZone from '../../components/DetectZone';
import axios from 'axios';

import '../../styles/addication.css'

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

import backNew1 from '../../assets/winPic/backNew1.png'
import card1 from '../../assets/winPic/card1.png'
import backNew2 from '../../assets/winPic/backNew2.png'
import player1 from '../../assets/winPic/player1.png'
import player2 from '../../assets/winPic/player2.png'


class InGame extends React.Component{
    constructor(props){
        super(props)
        this.state={
            word:[
                ['一行白鹭上青天', '一行白鹭上青天', '一行白鹭上青天', '一行白鹭上青天', '一行白鹭上青天', '一行白鹭上青天','一行白鹭上青天', 
                '一行白鹭上青天', '一行白鹭上青天', '一行白鹭上青天', '一行白鹭上青天', '一行白鹭上青天'], 
                ['两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳',
                '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳', '两个黄鹂鸣翠柳']
            ],
            image:[
                [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12],
                [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]
            ],
            isHighlight:true,
            Order:0,
            //这是哪一组
            Which:2,
            //这是哪一个
        }
    }
    
    componentDidMount() {
        this.initFromServer()
    }

    async initFromServer (){
        axios.get( 'http://127.0.0.1:8000/inGame/init')
        .then( 
            res => {
                this .setState({
                    word:res.data.words
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
                    isHighlight:res.data.isHighLight,
                    Order:res.data.order,
                    Which:res.data.witch,
                }, () => console .log(this.state.word))
            })
        .catch( err => console .log( "Couldn't fetch data. Error: " + err))
    }


    async movement(order,which,mode){
        let pics = this.state.image
        if(mode === 'del'){
            pics[order].splice(which,1)
        }
        axios.get('http://127.0.0.1:8000/inGame/move/?num='+order+'&pos='+which+'&mode='+mode)
        .then( 
            res => {
                this .setState({
                    word:res.data.words,
                    image:pics,
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
        let edit = this.state.word[num]
        let pics = this.state.image
        pics[num].splice(edit[num].indexOf(myName),1)
        this.movement(num,edit.indexOf(myName),'del')
    }

    render(){
        return(
            <div> 
            <div style={{backgroundImage: `url(${backNew1})`}}></div>
            <img className='card1' src={card1}></img>
            <img className='backNew2' src={backNew2}></img>
            <img className='player1' src={player1}></img>
            <img className='player2' src={player2}></img>
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
            </div>
        )
    }
}
export default InGame;
import React from 'react';
import CardHolder from '../../components/CardHolder';
import DetectZone from '../../components/DetectZone';
import axios from 'axios';

import backStyle from '../../styles/ingamebackLayout.module.css'

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
import player1 from '../../assets/winPic/player1.png'
import player2 from '../../assets/winPic/player2.png'
import TaskCard from '../../components/TaskCard';

let server = '47.111.137.93:8080'

class InGame extends React.Component{
    constructor(props){
        super(props)
        this.state={
            word:[
                ['测试1','测试2','测试3','测试4','测试5','测试6','测试7','测试8','测试9','测试10','测试11','测试12'], 
                ['测试1','测试2','测试3','测试4','测试5','测试6','测试7','测试8','测试9','测试10','测试11','测试12']
            ],
            image:[
                [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12],
                [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]
            ],
            isHighLight:false,
            Order:0,
            //这是哪一组
            Which:2,
            //这是哪一个
            State:'wait',
            Task:'',
            Zone : false,
        }
    }
    
    componentDidMount() {
        this.initFromServer()
        this.timer = setInterval(() => {
            this.update()
        }, 50);
    }

    componentWillUnmount(){
        if(this.timer!== null) {
            clearInterval(this.timer);
        }
    }

    async initFromServer (){
        axios.get( 'http://'+server+'/inGame/init')
        .then( 
            res => {
                this .setState({
                    word:res.data.words,
                    image:this.state.image,
                    isHighLight:res.data.isHighLight,
                    Order:res.data.order,
                    Which:res.data.witch,
                    State:res.data.state,
                    Task:res.data.task,
                    Zone : this.state.Zone,
                }, () => console .log(res))
            })
        .catch( err => console .log( "Couldn't fetch data. Error: " + err))
    }

    async update(){
        if(true){
            axios.get( 'http://'+server+'/inGame/getStat')
            .then( 
                res => {
                    this .setState({
                        word:res.data.words,
                        image:this.state.image,
                        isHighLight:res.data.isHighLight,
                        Order:res.data.order,
                        Which:res.data.witch,
                        State:res.data.state,
                        Task:res.data.task,
                        Zone : this.state.Zone,
                    }, () => console .log(res))
                })
            .catch( err => console .log( "Couldn't fetch data. Error: " + err))
        }
    }


    async movement(order,which,mode){
        let pics = this.state.image
        axios.get('http://'+server+'/inGame/move/?num='+order+'&pos='+which+'&mode='+mode)
        .then( 
            res => {
                this .setState({
                    word:res.data.words,
                    image:this.state.image,
                    isHighLight:res.data.isHighLight,
                    Order:res.data.order,
                    Which:res.data.which,
                    State:res.data.state,
                    Task:res.data.task,
                    Zone : this.state.Zone,
                }, () => console .log(this.state))
            })
        .catch( err => console .log( "Couldn't fetch data. Error: " + err))
    }

    mark = async(myName,num) =>{
        let edit = this.state.word[num]
        this.movement(num,edit.indexOf(myName),'mark')
    }
    
    demark = async(myName,num) =>{
        let edit = this.state.word[num]
        this.movement(num,edit.indexOf(myName),'demark')
    }

    destroy = async(myName,num) =>{
        let edit = this.state.word
        let ord = edit[num].indexOf(myName)
        edit[num].splice(ord,1)
        this.setState({
            word:edit,
            image:this.state.image,
            isHighLight:this.state.isHighLight,
            Order:this.state.Order,
            Which:this.state.Which,
            State:this.state.State,
            Zone : this.state.Zone,
        })
        this.movement(num,ord,'del')
    }

    showZone = () => {
        this.setState({
            word:this.state.word,
            image:this.state.image,
            isHighLight:this.state.isHighLight,
            Order:this.state.Order,
            Which:this.state.Which,
            State:this.state.State,
            Zone : true,
        })
    }

    closeZone = () => {
        this.setState({
            word:this.state.word,
            image:this.state.image,
            isHighLight:this.state.isHighLight,
            Order:this.state.Order,
            Which:this.state.Which,
            State:this.state.State,
            Zone : false,
        })
    }

    render(){
        return(
            <div>
                <div style={{backgroundImage: `url(${backNew1})`}}> 
                    <img className={backStyle.card1} src={card1}></img>
                    <img className={backStyle.player1} src={player1}></img>
                    <img className={backStyle.player2} src={player2}></img>
                    <div width='100vw' height='100vh' style={{display:'flex',flexDirection:'column'}}>
                        <div style={{height:'30vh',display:'flex',alignItems:'start',justifyContent: 'center'}}>
                            <CardHolder   
                                num = {0}
                                word={this.state.word[0]} 
                                isHighLight={this.state.isHighLight} 
                                which = {this.state.Which}
                                order={this.state.Order}  
                                mark = {this.mark}
                                demark = {this.demark}
                                destroy = {this.destroy}
                                image = {this.state.image[0]}
                                d='start'
                                showZone = {this.showZone}
                                closeZone = {this.closeZone}
                            />
                        </div>
                        <DetectZone w='40vw' h='40vh' m={this.state.Zone}/>
                        <div style={{height:'30vh',display:'flex',justifyContent: 'center',alignItems:'end'}}>
                            <CardHolder 
                                num = {1}
                                word={this.state.word[1]} 
                                isHighLight={this.state.isHighLight} 
                                which = {this.state.Which}
                                order={this.state.Order} 
                                mark = {this.mark}
                                demark = {this.demark}
                                destroy = {this.destroy} 
                                image = {this.state.image[1]}
                                d='end'
                                showZone = {this.showZone}
                                closeZone = {this.closeZone}
                            />
                        </div>
                    </div>
                </div>
                <TaskCard word={this.state.Task}/>
            </div>
        )
    }
}
export default InGame;
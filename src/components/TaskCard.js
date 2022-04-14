import React, {useState, useEffect} from 'react'
import { animated, useSpring} from '@react-spring/web'
import '../index.css'
import nativeStyle from '../styles/ingamebackLayout.module.css'
import taskback from '../assets/winPic/task.png'


function TaskCard(props){
    const [ifFresh,setIfFresh] = useState(false)


    const fresh = () =>{
        if(props.word === ''){
            setIfFresh(true);
        }else{
            setIfFresh(false);
        }
    }

    useEffect(
        () => {
            fresh();
        },
    )

    const styles = useSpring({
        from:{
            opacity:ifFresh?1:0,
        },
        to:{
            opacity:ifFresh?0:1,
        },
        onRest:() => {
            setIfFresh(false)
        }
    })

    return(
        <div>
            <animated.div style={{...styles}}>
                <img className={nativeStyle.background} src = {taskback}></img> 
                <div 
                    style={{position:'absolute',left:'45vw',top:'45vh',fontSize:'10vh',fontFamily:'FZJZ'}}
                >
                    {props.word}
                </div>
            </animated.div>
        </div> 
    )
}
export default TaskCard;
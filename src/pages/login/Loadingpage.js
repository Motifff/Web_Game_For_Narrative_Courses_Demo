import React from "react";
import ReactDOM from 'react-dom'
import "../../styles/index.css"
import "../../styles/Loadingpage.css"

//import PressInput from './pressInput.js';

import background1 from "../../assets/0.png"
import block1 from "../../assets/3.png"
import block2 from "../../assets/block2.png"
import block3 from "../../assets/block3.png"
import block5 from "../../assets/block6.png"
//import loadingText from "../../assets/"
   
class Loading extends React.Component{
    
    loadingElement(){
        return(
           <div>
              <img className = 'block5' src={block5} img/>
              <img className = 'block2' src={block2} img/> 
              <img className = 'block3' src={block3} img/>
              
           </div>
        )
    }

    constructor(props) {
        super(props);
        this.state={
          progressValue: 0, // 进度条背景宽度
          percentage: 0, // 进度条百分比
        }
    }
    
    handleBtn = () => {
        let { progressValue, percentage} = this.state;
        let timer = null;
        if (timer == null) {
          timer = setInterval(() => {
            progressValue += 10;
            // 这里的算法很重要，进度条容器的宽度为 400px 所以这里除以400再乘100就能得到 1-100的百分比了。
            percentage = Math.round(progressValue/580*100);
            if (progressValue >= 580) {
              percentage=100;
              progressValue=580;
              clearInterval(timer)
            }
            this.setState({ progressValue, percentage })
          }, 100);
        }
        
    }  
    render(){
       return(
          <div>
             <div style={{height:720,width:1280,backgroundImage:`url(${background1})`}}></div> 

             <img className = 'block' src={block1} img/>
             

             <div className='progress-box'>
                <div className='progress-group'>
                    <span>{this.state.percentage}%</span>
                    <div className='progress-bg' style={{ width: this.state.progressValue}}></div>
                </div>
                <button onClick={this.handleBtn}>安装</button>
             </div>
             {this.loadingElement()}
          </div>
      ) 
    }
        
}
export default Loading;
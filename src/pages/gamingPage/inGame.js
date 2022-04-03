import React from 'react'
import CardHolder from '../../components/CardHolder';

function InGame(props){
    return(
        <div>
            <div style={{margin:'20px',display:'flex',justifyContent: 'center'}}>
                <CardHolder/>
            </div>
            <div style={{width:'100vw',height:'20vh'}}>
            </div>
            <div style={{margin:'20px',display:'flex',justifyContent: 'center',bottom:'40px'}}>
                <CardHolder/>
            </div>
        </div>
    );
}
export default InGame;
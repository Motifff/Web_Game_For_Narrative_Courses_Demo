import React from 'react'
import CardHolder from '../../components/CardHolder';
import DetectZone from '../../components/DetectZone';

function InGame(props){
    return(
        <div width='100vw' height='100vh' style={{display:'flex',flexDirection:'column'}}>
            <div style={{height:'30vh',display:'flex',alignItems:'start',justifyContent: 'center'}}>
                <CardHolder d='start'/>
            </div>
            <DetectZone w='40vw' h='40vh'/>
            <div style={{height:'30vh',display:'flex',justifyContent: 'center',alignItems:'end'}}>
                <CardHolder d='end'/>
            </div>
        </div>
    );
}
export default InGame;
import React,{ useState } from 'react'
import { useSpring, animated } from 'react-spring'

function Card() {
    const [isFocus,setFocus] = useState(false);
    
    const styles = useSpring({
        width : isFocus ? '40vh':'vh20',
        height : isFocus ? '40vh':'vh20'
    });

    const toggle = () => setFocus(!isFocus);

    return(
        <div>
            <animated.div style={{
                width: 80,
                height: 80,
                backgroundColor: '#46e891',
                borderRadius: 16,
                ...styles,
            }}>
            whattt
            </animated.div>
            <button onClick={toggle}>aa</button>
        </div>
    );
}
export default Card;
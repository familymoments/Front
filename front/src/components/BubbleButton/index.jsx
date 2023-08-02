import Styles from "./BubbleButton.module.css";
import { useState } from 'react';
function BubbleButton(props){
    const [isActive, setActive] = useState(false);
    return(
    <div>
        <button
            className={`${Styles.button}
                ${props.layout}
                ${props.type === "pink" ? Styles.button1 : ''}
                ${props.type === "purple" ? Styles.button2 : ''}
                ${props.type === "blue" ? Styles.button3 : ''}
               
            `}>
                <p className={Styles.text}>{props.text}</p>
                </button>
    </div>)
}

export default BubbleButton;
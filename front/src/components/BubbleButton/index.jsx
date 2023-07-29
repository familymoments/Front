import Styles from "./BubbleButton.module.css";
import { useState } from 'react';
function BubbleButton(props){
    const [isActive, setActive] = useState(false);
    return(
    <div>
        <button
            className={`${Styles.button}
                ${props.layout}
                ${props.type === "pink" ? Styles.circle1 : ''}
                ${props.type === "purple" ? Styles.circle2 : ''}
                ${props.type === "blue" ? Styles.circle3 : ''}
                ${isActive ? (props.type === "pink" ? Styles.activeCircle1 : '') : ''}
                ${isActive ? (props.type === "purple" ? Styles.activeCircle2 : '') : ''}
                ${isActive ? (props.type === "blue" ? Styles.activeCircle3 : '') : ''}
            `}>
                <p className={Styles.text}>{props.text}</p>
                </button>
    </div>)
}

export default BubbleButton;
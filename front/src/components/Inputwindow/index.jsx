import Styles from './Inputwindow.module.css';
import {useState} from 'react';

function Inputwindow(props){
    const [isActive, setActive] = useState(false);
    return(
    <div>
        <input 
        className ={` 
        ${Styles.shape} 
        ${props.type == "big" ? Styles.big : ''}
        ${props.type == "small" ? Styles.small : ''}
        `} 
        placeholder={props.placeholder} >

        </input>
    </div> );
}

export default Inputwindow;
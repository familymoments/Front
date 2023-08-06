/** 버튼 컴포넌트  
 * props {
 *  title : string
 *  btn : css class => 버튼이 위치할 레이아웃 넣는 곳
 *        (만약, props drilling이 일어나면 상태관리 하기)
 * }
*/

import classes from "./Button.module.css";

function Button (props) {
    
    return(
    <div>
        <button className={`${classes.button} ${props.btn}`}  onClick={props.onClick}>
        <div className = {classes.font}>{props.title}</div>
        </button>
    </div>
    );
}

export default Button;
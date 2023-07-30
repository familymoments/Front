/** 버튼 컴포넌트  
 * props {
 *  title : string
 *  btn : css class => 버튼이 위치할 레이아웃 넣는 곳
 *        (만약, props drilling이 일어나면 상태관리 하기)
 * }
*/

import classes from "./Button.module.css";

const Button = props => {
    return (
        <button className={`${classes.button} ${props.btn}`}>

            <div  className={classes.font}>{props.title}</div>
        </button>
    )
};

export default Button;
/** 버튼 컴포넌트  
 * props {
 *  title : string
 *  btn : css class => 버튼이 위치할 레이아웃 넣는 곳
 *        (만약, props drilling이 일어나면 상태관리 하기)
 * }
*/
import { useNavigate } from "react-router-dom";
import classes from "./Button.module.css";

function Button (props) {
    const navigate = useNavigate();
    return(
    <div>
        <button className={`${classes.button} ${props.btn}`} onClick={()=>{navigate(props.location)}}>
        <div className = {classes.font}>{props.title}</div>
        </button>
    </div>
    );
}

export default Button;
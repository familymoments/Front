
/** 헤더 컴포넌트  
 * props {
 *  title : string
 *  showIcon : boolean -> true시 알림버튼 보임, false시 알림버튼 숨김
 * }
*/

import classes from "./Header.module.css"
import { AiOutlineBell } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
const Header = props => {
    const nav = useNavigate();
    return (
        <div className={classes.Header}>
            <div className={classes.font}>{props.title}</div>
            {props.showIcon && <AiOutlineBell className={classes.icon} onClick={()=>{nav("/main/alam")}}/>}
        </div>
    );
};

export default Header;
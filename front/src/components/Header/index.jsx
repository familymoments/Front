
/** 헤더 컴포넌트  
 * props {
 *  title : string
 *  showIcon : boolean -> true시 알림버튼 보임, false시 알림버튼 숨김
 * }
*/

import classes from "./Header.module.css"
import { BsChevronLeft } from "react-icons/bs";
import { AiOutlineBell } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const Header = props => {
    const nav = useNavigate();

    const backHandler = () => {
        nav(-1);
    }

    return (
        <div className={classes.Header}>
            {/* 뒤로가기 버튼 :  props로 backIcon을 전달할때 true면 아이콘 보임 */}
            {props.backIcon && <BsChevronLeft className={classes.back} onClick={backHandler} />}
            <div className={classes.font}>{props.title}</div>
            {props.showIcon && <AiOutlineBell className={classes.icon} onClick={() => alert("알람버튼.")}/>}
        </div>
    );
};

export default Header;
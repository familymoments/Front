/**헤더 컴포넌트  props : title=""
 */
import classes from "./Header.module.css"
import { AiOutlineBell } from 'react-icons/ai';

const Header = props => {
    return (
        <div className={classes.Header}>
            <div className={classes.font}>{props.title}</div>
            {props.showIcon && <AiOutlineBell className={classes.icon} onClick={() => alert("알람버튼.")}/>}
        </div>
    );
};

export default Header;
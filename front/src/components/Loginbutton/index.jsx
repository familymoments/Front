import Styles from "./Loginbutton.module.css";
import { useNavigate } from "react-router-dom";


// props text = 버튼안 문자
// props location = 페이지이동
function Loginbutton (props) {
    const navigate = useNavigate();
return(
<div>
<button onClick={()=>{navigate(props.location)}}className={Styles.button}>
    <div className={Styles.font}>
        <div className = {Styles.fontdetail}>{props.texts}</div>
    </div>
</button>
</div>

);
}

export default Loginbutton;
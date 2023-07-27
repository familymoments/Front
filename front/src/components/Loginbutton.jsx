import Styles from "./Loginbutton.module.css";
function Loginbutton (props) {

return(
<div>
<button className={Styles.button}>
    <div className={Styles.font}>
        <div className = {Styles.fontdetail}>{props.texts}</div>
    </div>
</button>
</div>

);
}

export default Loginbutton;
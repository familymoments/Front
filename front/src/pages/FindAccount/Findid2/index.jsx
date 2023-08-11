import Styles from "./Findid2.module.css"

import BubbleButton from "../../../components/BubbleButton";
function Findid2(){
    return (
    <div id = {Styles.page}>
        
        <h1 id = {Styles.toptext}>아이디 찾기</h1>
        <div className = {Styles.inputbox}>
        <input className={Styles.idinput}></input>
        </div>
        <div className= {Styles.buttons}>
            <div lassName = {Styles.ok}>
        <BubbleButton  type = "purple" text =" 수락" layout = ""/>
        </div>
        < div className = {Styles.no}>
        <BubbleButton  type = "blue" text =" 거절" layout = ""/>
        </div>
        </div>
    </div>);
}
export default Findid2;
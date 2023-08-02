import Styles from "./Findpwd3.module.css";
import Loginbutton from "../../components/Loginbutton";
import Header from "../../components/Header";

function Findpwd3(){
    return(
        <div>
            <Header title = "Family Moments"/>
            <h1 className={Styles.title}>비밀번호 재설정</h1>
            <div className={Styles.txtlocation}>
            <h className = {Styles.txts}>새로운 비밀번호를 입력해주세요.</h>
            </div>
            <div className={Styles.inputlocation}>
                <input className = {Styles.inputstyle} placeholder="새 비밀번호"></input>
                <input className = {Styles.inputstyle} placeholder="새 비밀번호 확인"></input>
            </div>
            <div className={Styles.buttonlocation}>
                <Loginbutton texts =" 순간을 가족에게 공유하기"/>
            </div>

        </div>
    );
}

export default Findpwd3;
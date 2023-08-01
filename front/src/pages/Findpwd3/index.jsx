import Styles from "./Findpwd3.module.css";
import Loginbutton from "../../components/Loginbutton";
import Header from "../../components/Header";

function Findpwd3(){
    return(
        <div>
            <Header title = "Family Moments"/>
            <h1 className={Styles.title}>비밀번호 재설정</h1>
            <h>새로운 비밀번호를 설정해주세요</h>
            <div>
                <input placeholder="새 비밀번호"></input>
                <input placeholder="새 비밀번호 확인"></input>
            </div>
            <div>
                <Loginbutton/>
            </div>

        </div>
    );
}

export default Findpwd3;
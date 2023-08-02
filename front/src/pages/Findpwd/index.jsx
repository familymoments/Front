import Styles from "./Findpwd.module.css";
import Header from "../../components/Header";
import Loginbutton from "../../components/Loginbutton";

function Findpwd(){
    return(
        <div>
            <Header title = "Family Moments"/>
                <h1 className={Styles.title}>비밀번호 찾기</h1>
             <div className={Styles.txtlocation}>
                <p className={Styles.texts}>비밀번호를 찾고자하는 아이디를 입력해주세요</p>
            </div>
            <div className={Styles.inputlocation}>
                <input className={Styles.idinput} placeholder = "ID"></input>
            </div>
            <div className={Styles.button}>
                <Loginbutton texts =" 순간을 가족에게 공유하기"/>
            </div>
        </div>
    );
}

export default Findpwd;
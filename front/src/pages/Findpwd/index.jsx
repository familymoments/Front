import Styles from "./Findpwd.module.css";
import Header from "../../components/Header";
import Loginbutton from "../../components/Loginbutton";

function Findpwd(){
    return(
        <div>
            <Header title = "Family Moments"/>
        <h1 className={Styles.title}>비밀번호 찾기</h1>
        <p>비밀번호를 찾고자하는 아이디를 입력해주세요</p>
        <input placeholder = "ID"></input>
            <div>
                <Loginbutton texts =" 순간을 가족에게 공유하기"/>
            </div>
        </div>
    );
}

export default Findpwd;
import Styles from "./Signin.module.css";
import Header from '../../components/Header';
import Loginbutton from "../../components/Loginbutton";
import Inputwindow from "../../components/Inputwindow";
import CertificationButton from "../../components/CertificationButton";
import { TiDeleteOutline } from 'react-icons/ti';

function Doublecheck(props){
    return(
    <div>
    <form className={Styles.doublecheck}>
        <div className = {Styles.small}>
            <Inputwindow  type = "small" placeholder = {props.placeholder}/>
        </div>
        <div className= {Styles.certbutn}>
            <CertificationButton text = "중복확인"/>  
        </div>
    </form>
    </div>
    );
}
function Deletebuttoninput(props){
    return(
    <div>
        <h2 className={Styles.h2}>{props.title}</h2>
        <form className={Styles.delbutninputform}>
            <div className={Styles.delbutninputwindow}>
            <Inputwindow type = "big" placeholder = {props.placeholder}/>
            </div>
            <button className={Styles.deletebutton}> <TiDeleteOutline /></button>
            
        </form>
    </div>
    );
}
function Normalinput(props){
    return(
        <div>
            <h2 className={Styles.h2}>생년월일</h2>
            <Inputwindow type = "big" placeholder = {props.placeholder}/>
        </div>
    );
}



function Signin(){
    return(
        <div>
            <Header title = "회원가입"/>
           
            <div>
                <h2 className={`${Styles.h2} ${Styles.id}`}>아이디</h2>
                <Doublecheck placeholder = "아이디를 입력하세요"/>
            </div>
            <div>
                <Deletebuttoninput title = "비밀번호" placeholder = "비밀번호를 입력하세요"/>
            </div>
            <div>
                <Deletebuttoninput title = "비밀번호 확인" placeholder = "비밀번호를 한번 더 입력하세요"/>
            </div>
            <div>
                <h2 className={Styles.h2}>이름</h2>
                <Inputwindow type = "big" placeholder = "아이디를 입력하세요"/>
            </div> 
            <div>
                <h2 className={Styles.h2}>이메일 인증</h2>
                <Doublecheck placeholder = "이메일을 입력하세요"/>
            </div>
            <div>
                <h2 className={Styles.h2}>생년월일</h2>
                <Inputwindow type = "big" placeholder = "아이디를 입력하세요"className={`${Styles.input}`}/>
            </div>
            <div>
                <h2 className={Styles.h2}>닉네임</h2>  
                <Inputwindow type = "big" placeholder = "아이디를 입력하세요"className={`${Styles.input}`}/>
            </div>
            <div>
                <h2 className={Styles.h2}>프로필 사진 선택</h2>
            </div>
            <div>
            <button></button>
            <h2>모두 동의합니다</h2>
            <p>(필수) 서비스 이용 약관에 동의</p>
            <p>(필수) 본인관련 서비스 관련 이용 약관</p>
            <p>(선택) 마케팅 정보 알림 및 수신 동의</p>
            <Loginbutton texts = "Family Moments 시작하기" />
            
            </div>
        </div>
    );
}

export default Signin;
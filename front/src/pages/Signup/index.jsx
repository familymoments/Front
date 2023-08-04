
import Styles from "./Signup.module.css";
import Loginbutton from "../../components/Loginbutton";
import Inputwindow from "../../components/Inputwindow";
import CertificationButton from "../../components/CertificationButton";
import { TiDeleteOutline } from 'react-icons/ti';
import {AiFillCheckCircle} from 'react-icons/ai';
import {GrNext} from 'react-icons/gr';
import {FaCheck} from 'react-icons/fa';
import FileUploadButton from "../../components/FileUpload";
import { useEffect } from 'react';

function Signup(props){
    useEffect(()=>{
        props.changeTitle("회원가입");
    })

    return(
        
        <div className={Styles.page}>
            <div className ={Styles.header}>
                <Doublecheckinput  customClass = {Styles.header} title = "아이디"placeholder = "아이디를 입력하세요"/>
            </div>
                <Deletebuttoninput title = "비밀번호" placeholder = "비밀번호를 입력하세요"/>
                <Deletebuttoninput title = "비밀번호 확인" placeholder = "비밀번호를 한번 더 입력하세요"/>
                <Normalinput title = "이름" placeholder = "이름을 입력하세요"/>
                <Doublecheckinput title = "이메일"placeholder = "이메일을 입력하세요"/>
                <Normalinput title = "생년월일"placeholder = "8자리 입력 ex)19990101"/>
                <Normalinput title = "닉네임" placeholder = "3~8자리 입력 (특수문자 불가)"/>
                <div className = {Styles.h2box}>
                    <h2 className={Styles.h2}>프로필 사진 선택</h2>
                </div>
                <div className={Styles.fileupload}>
                    <FileUploadButton />
                </div> 
                <p className={Styles.profiletxt}>사용하실 프로필 이미지를 선택해주세요.</p>
                <Alladmit/>
                <hr/>
                <Smalladmit texts = "(필수) 서비스 이용 약관에 동의"/>
                <Smalladmit texts = "(필수) 본인관련 서비스 관련 이용 약관"/>
                <Smalladmit texts = "(선택) 마케팅 정보 알림 및 수신 동의"/>
            <div className={Styles.signupbutn}>
                <Loginbutton location = "/landing/login" texts = "Family Moments 시작하기" />
            </div>
                
        </div>
        
        
    );
}

export default Signup;


function Doublecheckinput(props){
    return(
    <div>
        <div className = {Styles.h2box}>
        <h2 className={Styles.h2}>{props.title}</h2>
        </div>
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
        <div className = {Styles.h2box}>
        <h2 className={Styles.h2}>{props.title}</h2>
        </div>
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
            <div className = {Styles.h2box}>
            <h2 className={Styles.h2}>{props.title}</h2>
            </div>
            <form className={Styles.nomalinput}>
            <Inputwindow type = "big" placeholder = {props.placeholder}/>
            </form>
        </div>
    );
}
function Alladmit(props){
    return(
       
            <form className={Styles.alladmitbox}>
                <div className={Styles.alladmit}>
                <button className= {`${Styles.checkbutn} ${Styles.allcheckbtn}`}><AiFillCheckCircle/></button>
                <h2 className= {Styles.alladmittxt}>모두 동의합니다</h2>
                </div>
            </form>
      
    )
}

function Smalladmit(props){
    return(
        <div className={Styles.smalladmitbox}>
            <form className={Styles.smalladmit}>
                <button className={Styles.checkbutn}><FaCheck/></button>
                <p className={Styles.smalladmittxt}>{props.texts}</p>
                <button className= {Styles.checkbutn}><GrNext/></button>
            </form>
        </div>
    )
}


import CertificationButton from '../../components/CertificationButton';
import Header from '../../components/Header';
import Loginbutton from '../../components/Loginbutton';
import Styles from './Findid.module.css'
import Inputwindow from '../../components/Inputwindow';
import { TiDeleteOutline } from 'react-icons/ti';


function Findid(){
    return(
    <div id = {Styles.page}>
        <Header title = "Family Moments" showIcon={true}/>
        <div className={Styles.top}>
        <h1 id = {Styles.toptext}>아이디 찾기</h1>
        <p id = {Styles.topsmalltext}>본인 확인을 위하여 이메일로 인증해주세요</p>
        <h2 className ={Styles.topname}>이름</h2>
        </div>

        <form className={Styles.nameform}>
        <div className = {Styles.namewindow}>
        <Inputwindow className = {Styles.namewindow}placeholder='실명을 입력하세요 ex) 홍길동'></Inputwindow>
        </div>
        <button className = {Styles.deletebutton} type = "button"><TiDeleteOutline/></button> 
        </form>


        <h2 id ={Styles.bottom}>이메일</h2>
        <div className={Styles.confirmemail}>
            <form className={Styles.certification}>
            <input className = {Styles.email} placeholder = 'example@email.com'></input>
                <div>
            <CertificationButton text = "인증하기"></CertificationButton>
                </div>
            </form>
        
        <Inputwindow placeholder = '인증번호 6자리'></Inputwindow>
        </div>
        <div id = {Styles.findidbutton}>
        <Loginbutton  texts = "순간을 가족에게 공유하기"/>
        </div>
        </div>);
}

export default Findid;
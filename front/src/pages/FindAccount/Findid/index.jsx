import CertificationButton from '../../components/CertificationButton';
import Loginbutton from '../../components/Loginbutton';
import Styles from './Findid.module.css'
import Inputwindow from '../../components/Inputwindow';
import { TiDeleteOutline } from 'react-icons/ti';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Findid(props){

    useEffect(()=>{
        props.changeTitle("아이디 찾기");
    })
    const navigate = useNavigate();
    return(
    <div>
        <div className={Styles.top}>
            <h1 className = {Styles.findidtext}>아이디 찾기</h1>
            <p className = {Styles.topsmalltext}>본인 확인을 위하여 이메일로 인증해주세요</p>
            </div>
            <h2 className ={Styles.topname}>이름</h2>
            <form className={Styles.nameform}>
                <div className = {Styles.namewindow}>
                <Inputwindow type = "big" placeholder='실명을 입력하세요 ex) 홍길동'></Inputwindow>
                </div>
                <button className = {Styles.deletebutton} type = "button"><TiDeleteOutline/></button> 
            </form>

            <h2 id ={Styles.bottom}>이메일</h2>

            <div className={Styles.confirmemail}>
                <form className={Styles.certification}>
                <input className = {Styles.email} placeholder = 'example@email.com'></input>
                <CertificationButton text = "인증하기"></CertificationButton>
                </form>
            
            <Inputwindow type = "big" placeholder = '인증번호 6자리'></Inputwindow>
            </div>

            <div id = {Styles.findidbutton}>
            <Loginbutton  location ="/landing/findid2" texts = "순간을 가족에게 공유하기"/>
            </div>

        </div>);
}

export default Findid;
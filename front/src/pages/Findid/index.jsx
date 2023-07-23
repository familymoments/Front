import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Loginbutton from '../../components/Loginbutton';
import Styles from './Findid.module.css'
import Inputwindow from '../../components/Inputwindow';

function Findid(){
    return(
    <div id = {Styles.page}>
        <Header title = "Family Moments"/>
        
        <h1 id = {Styles.toptext}>아이디 찾기</h1>
        <p id = {Styles.topsmalltext}>본인 확인을 위하여 이메일로 인증해주세요</p>
        
        <h2 id ={Styles.bottom}>이름</h2>
        <input placeholder='실명을 입력하세요 ex) 홍길동'></input>
        <h2 id ={Styles.bottom}>이메일</h2>
        <div>
        <Inputwindow placeholder = 'example@email.com'></Inputwindow>
        
        <button></button>
        </div>
        
        <Inputwindow placeholder = '인증번호 6자리'></Inputwindow>
        <Loginbutton texts = "순간을 가족에게 공유하기"/>
       
        </div>);
}

export default Findid;
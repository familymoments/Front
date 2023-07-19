import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Loginbutton from '../components/Loginbutton';
import Styles from '../pages/Findid.module.css'
function Findid(){
    return(<div>
        <Header/>
        
        <h1 id = {Styles.toptext}>아이디 찾기</h1>
        <p id = {Styles.topsmalltext}>본인 확인을 위하여 이메일로 인증해주세요</p>
        
        <h2>이름</h2>
        <input placeholder='실명을 입력하세요 ex) 홍길동'></input>
        <h2>이메일</h2>
        <div>
        <input placeholder='example@email.com'></input>
        <button></button>
        </div>
        <input placeholder='인증번호 6자리'></input>
        <Loginbutton texts = "순간을 가족에게 공유하기"/>
        </div>);
}

export default Findid;
import Styles from './Login.module.css';
import Loginbutton from '../components/Loginbutton';
import {useForm} from "react-hook-form";
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';

function Login(){
    const {register, handleSubmit} = useForm();

    return(
    <div>
    <div className={Styles.top}>
        `<div className= {Styles.loginTopLogo}>
            <img src={process.env.PUBLIC_URL + '/mainLogo.png'} /> 
        </div>
        <div>
        <h2 className = {Styles.font}>안녕하세요 :) <p>패밀리 모먼트입니다.</p>
        <p id = {Styles.font2}>가족들과 소중한 순간을 공유해 보세요.</p></h2>
        </div>
    </div>
   
        <form onSubmit = {handleSubmit((data) => alert(JSON.stringify(data)))}>
            <div>
                <input id={Styles.id} type= "email"  placeholder="ID" {...register("email")} />
            </div>
            <div>
                <input id = {Styles.password} type='password'  placeholder='Password' {...register("password")}/>
            </div>
        
            <div>
                <Loginbutton type = "submit" texts = "순간을 가족에게 공유하기"></Loginbutton>
            </div>
        </form>
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
            <button>회원가입</button>
        
    </div>
    );
}

export default Login;
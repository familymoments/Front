import Styles from './Login.module.css';
import Header from '../Landing';
import Findid from '../Findid';
import Loginbutton from '../../components/Loginbutton';
import {useForm} from "react-hook-form";
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';

function Login({
    onSubmit = async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      },}){
    const {register, 
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors },} = useForm();
    
    return(
    <div className={Styles.wrapper}>
         <Header title="Family Moments" />
    <div className={Styles.top}>
        `<div className= {Styles.loginTopLogo}>
            <img src={process.env.PUBLIC_URL + '/mainLogo.png'} /> 
        </div>
        <div>
        <h2 className = {Styles.font}>안녕하세요 :-) <p>패밀리 모먼트입니다.</p>
        <p id = {Styles.font2}>가족들과 소중한 순간을 공유해 보세요.</p></h2>
        </div>
    </div>
   
    <form className = {Styles.input} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p/>
                <input id = "email" className={Styles.id} type= "email"  placeholder="ID"
                aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : undefined} {...register("email", {required: "이메일은 필수 입력입니다.",
                pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
                },})}/>
                {errors.email && <small role="alert">{errors.email.message}</small>}
            </div>
            <div>
                <label>dsdsdsdsdd </label>
                <input id ="password" className = {Styles.password} type='password'  placeholder='Password' 
                        aria-invalid={
                            isSubmitted ? (errors.password ? "true" : "false") : undefined
                        }
                {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                        value: 8,
                        message: "8자리 이상 비밀번호를 사용하세요.",
                }, })}
                />
                {errors.password && <small role="alert">{errors.password.message}</small>}
            </div>
        
            <div>
                <Loginbutton type = "submit" disabled = {isSubmitting} texts ="로그인"></Loginbutton>
            </div>
        </form>
        <div >
            <button className={Styles.accountbutton}>아이디 찾기</button>
            <button className={Styles.accountbutton}>비밀번호 찾기</button>
            <button className={Styles.accountbutton}>회원가입</button>
        </div>
            <div id={Styles.hrsect}>SNS 계정으로 로그인</div>
            <button onClick={''}>카카오 로그인</button>
            <button onClick={''}>네이버 로그인</button>
            <button onClick={''}>구글 로그인</button>
            
        
    </div>
    );
}

export default Login;
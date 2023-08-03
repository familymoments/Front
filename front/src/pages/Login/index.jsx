import Styles from './Login.module.css';
import Loginbutton from '../../components/Loginbutton';
import {useForm} from "react-hook-form";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {SiNaver} from 'react-icons/si';
import {RiKakaoTalkFill} from 'react-icons/ri';

function Login({
    onSubmit = async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      },})
      {
    const {register, 
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors },} = useForm();

    const navigate = useNavigate();
    return(
    <div>
        <div className={Styles.top}>
            <div className= {Styles.toplogo}>
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
                <input id = "id" className={Styles.id} type= "email"  placeholder="ID"
                aria-invalid={isSubmitted ? (errors.email ? "true" : "false") : undefined} {...register("email", {required: "이메일은 필수 입력입니다.",
                pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
                },})}/>
                {errors.email && <small role="alert">{errors.email.message}</small>}
            </div>
            <div>
                <input id ="password" className = {Styles.password} type='password'  placeholder='Password' 
                        aria-invalid={
                            isSubmitted ? (errors.password ? "true" : "false") : undefined
                        }
                {...register("password", {
                    required: 
                    "비밀번호는 필수 입력입니다.",
                    minLength: {
                        value: 8,
                        message: "8자리 이상 비밀번호를 사용하세요.",
                }, })}
                />
                {errors.password && <small role="alert">{errors.password.message}</small>}
            </div>
                <Loginbutton location = "/landing/newfamily"type = "submit" disabled = {isSubmitting} texts ="로그인"></Loginbutton>
        </form>

        <div className={Styles.accountbutton}>
            <button onClick={()=>{navigate("/landing/findid")}} className={Styles.accountbutton}>아이디 찾기</button>
            <p className={Styles.accountbutton}>|</p>
            <button  onClick={()=>{navigate("/landing/findpwd")}}className={Styles.accountbutton}>비밀번호 찾기</button>
            <p className={Styles.accountbutton}>|</p>
            <button onClick={()=>{navigate("/landing/signup")}} className={Styles.accountbutton}>회원가입</button>
        </div>

            <div id={Styles.hrsect}>SNS 계정으로 로그인</div>
            
           
            <div className = {Styles.socialloginbox}>
            <button onClick={''} className={Styles.kakao}><RiKakaoTalkFill className={Styles.kakaodetail}/></button>
            <button onClick={''} className={Styles.naver}><SiNaver/></button>
            <button onClick={''} className = {Styles.google}><FcGoogle className={Styles.googledetail}/></button>
            </div> 
        
    </div>
    );
}

export default Login;
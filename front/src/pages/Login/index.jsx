import Styles from './Login.module.css';
import Loginbutton from '../../components/Loginbutton';
import {get, useForm} from "react-hook-form";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {SiNaver} from 'react-icons/si';
import {RiKakaoTalkFill} from 'react-icons/ri';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
// import Swal from "sweetalert2";
import {atom,useRecoilState,useRecoilValue} from "recoil";
// import { setCookie, decodeCookie, removeCookie } from "./Cookie";
// import {loginData} from "./atom.jsx";




function Login(props,{
    onSubmit = async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        alert(JSON.stringify(data));
    },
}) {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isSubmitted, errors },
    } = useForm();
    
    // useEffect(()=>{
    //     props.changeTitle("Family Moments");
    // })
    
    // const [loginData, setloginData] = useRecoilState(loginData);
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [password, setPwd] = useState('');
    const onIdHandler = (event) => {
       setId(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
       setPwd(event.currentTarget.value);
   }
    const body = {
        id : id,
        password : password,
      };
    const getAuth = (e) => {
        console.log(body);
        axios
            .post("/users/log-in",body)
            .then(function (response) {
                console.log(response);
                navigate("/landing/newfamily")
                // setloginData()
            })
            .catch(function (error) {
                console.log(error);
        //         Swal.fire({
        //     icon: "error",
        //     title: "이메일 또는 비밀번호가 틀렸습니다."
           
        //   });
            });
        
    };
    
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
   
    <form className = {Styles.input} onSubmit={handleSubmit(getAuth)}>
            <div>
              {/* onChange={onIdHandler} */}
                  {/* onChange = {(e) =>setId(e.target.value)} */}
                <input id = "id" className={Styles.id} type= "id"  placeholder="ID"   onChange = {(e) =>setId(e.target.value)}
                aria-invalid={isSubmitted ? (errors.id ? "true" : "false") : undefined} 
                {...register("id", {required: "아이디는 필수 입력입니다.",
                pattern: {
                
                message: "아이디가 올바르지 않습니다.",
                
                },})}/>
                {errors.id && <small role="alert">{errors.id.message}</small>}
                
            </div>
            <div>
                 {/* onChange={(e) =>setPw(e.target.value)} */}
                 {/* onChange={onPasswordHandler} */}
                <input id ="password" className = {Styles.password} onChange={(e) =>setPwd(e.target.value)} type='password'  placeholder='Password' 
                        aria-invalid={
                            isSubmitted
                                ? errors.password
                                    ? "true"
                                    : "false"
                                : undefined
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
                <button className={Styles.loginbtn} type = "submit"><Loginbutton  texts ="로그인"></Loginbutton></button>
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


 
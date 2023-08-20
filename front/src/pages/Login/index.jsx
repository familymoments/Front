import Styles from './Login.module.css';
import Loginbutton from '../../components/Loginbutton';
import {useForm} from "react-hook-form";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import {SiNaver} from 'react-icons/si';
import {RiKakaoTalkFill} from 'react-icons/ri';
import axios, { AxiosRequestConfig } from "axios";
import Swal from "sweetalert2";
import { setCookie,getCookie } from "./Cookie";
import {header} from "../../atom";
import { useRecoilState } from 'recoil';
import Cookie from "js-cookie";
import moment from "moment";
function Login(props) {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    
    useEffect(()=>{
        props.changeTitle("Family Moments");
    })
    // 상태관리 x-auth token 관리 가져다 쓰세용
    const [headers, setHeaders] = useRecoilState(header);
    const[cookie, setCookie] = useState("");
    //navigate
    const navigate = useNavigate();
    // id 값 관리
    const id = watch("id");
    // password 값 관리
    const password = watch("password");
    //login data 전송
    const getAuth = (data) => {
        axios
            .post(`${SERVER}/users/log-in`,data)
            .then(function (res) {
                console.log(res);
                const token = res.data.token;
                console.log(res.headers.get("x-auth-token"));
                setHeaders(res.headers.get("x-auth-token"));
                localStorage.setItem('token', res.headers.get("x-auth-token"));
                navigate("/landing/newfamily");
                //const refreshToken = getCookie("refresh-token");
                // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                //axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
                //const refreshToken = Cookie.get("refresh-token");
                
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                 icon: "error",
                 title: "아이디 또는 비밀번호가 틀렸습니다."
          });
            });
    };
    
    // const refresh = async (config) => {
    //     const refreshToken = Cookie.get("refreshToken");
    //     console.log(refreshToken);
    //     const expireAt = sessionStorage.getItem("expiresAt");
    //     let token = sessionStorage.getItem("x-auth-token");
    //     console.log("만료확인");
    //     // 토큰이 만료되었다면
    //     if (moment(expireAt).diff(moment()) < 0) {
    //         var body = {
    //           //email: sessionStorage.getItem("email"),
    //           header,
    //         };
        
    //         console.log("토큰을 재발급합니다!");
    //         //재발급 요청
    //         const res = await axios.post(
    //             `${SERVER}/users/auth/reissue`,
    //             body
    //         );
    //         console.log("재발급 성공", res.data.x-auth-token);
    //         sessionStorage.setItem("x-auth-token", res.data.x-auth-token);
    //         sessionStorage.setItem(
    //             "expiresAt",
    //             moment().add(3, "minute").format("yyyy-MM-DD HH:mm:ss")
    //         );
    //         config.headers["Authorization"] = `Bearer ${token}`; // 토큰 교체
    //         }
        
    //         return config;
    //     };
    //     const refreshErrorHandle = () => {
    //         //Cookie.remove("refreshToken");
    //       };
          
    //       //export { refresh, refreshErrorHandle };
    return(
    <div>
        <div className={Styles.top}>
            <div className= {Styles.toplogo}>
                <img src={process.env.PUBLIC_URL + '/mainLogo.png'} /> 
            </div>
            <div>
            <h2 className = {Styles.font}>안녕하세요 :-) <p>패밀리 모먼트입니다.</p>
            <p className = {Styles.font2}>가족들과 소중한 순간을 공유해 보세요.</p></h2>
            </div>
        </div>
   
    <form className = {Styles.input} onSubmit={handleSubmit(getAuth)} method="post">
            <div>
                <input id = "id" className={Styles.id} type= "text"  placeholder="ID"   
                {...register("id", {required: "아이디는 필수 입력입니다.",
                minLength: {
                    value: 6,
                    message: "영문과 숫자만 사용하여, 6~12글자의 아이디를 입력해주세요",
                    },
                maxLength: {
                    value: 12,
                    message: "영문과 숫자만 사용하여, 6~12글자의 아이디를 입력해주세요",
                        },
                 pattern: {
                     value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{6,12}$/,
                     message: "영문과 숫자를 사용하여, 6~12글자의 아이디를 입력해주세요.",
                       },
                       })}/>     
            </div>
            {errors.id && <small className = {Styles.alert} role="alert">{errors.id.message}</small>}

            <div>
                <input id ="password" className = {Styles.password}  type='password'  placeholder='Password' 
                {...register("password", {
                    required: 
                    "비밀번호는 필수 입력입니다.",
                    minLength: {
                        value: 8,
                        message: "영문과 숫자를 사용하여, 8~12글자의 비밀번호를 입력해주세요.",
                },
                maxLength: {
                    value: 12,
                    message: "영문과 숫자를 사용하여, 8~12글자의 비밀번호를 입력해주세요.",
                },
                pattern: {
                    value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{8,12}$/,
                    message: "영문과 숫자를 사용하여, 8~12글자의 비밀번호를 입력해주세요.",
                      },
               
            })}/>
            </div>
            {errors.password && <small className = {Styles.alert}role="alert">{errors.password.message}</small>}
                <button className={Styles.loginbtn} type = "submit"><Loginbutton  texts ="로그인"></Loginbutton></button>  
        </form>

        <div className={Styles.accountbutton}>
            <button onClick={()=>{navigate("/landing/findid")}} className={Styles.accountbutton}>아이디 찾기</button>
            <p className={Styles.accountbutton}>|</p>
            <button  onClick={()=>{navigate("/landing/findpwd")}}className={Styles.accountbutton}>비밀번호 찾기</button>
            <p className={Styles.accountbutton}>|</p>
            <button onClick={()=>{navigate("/landing/signup")}} className={Styles.accountbutton}>회원가입</button>
        </div>
            {/* 소셜 로그인 */}
            {/* <div id={Styles.hrsect}>SNS 계정으로 로그인</div>
            
           
            <div className = {Styles.socialloginbox}>
            <button onClick={''} className={Styles.kakao}><RiKakaoTalkFill className={Styles.kakaodetail}/></button>
            <button onClick={''} className={Styles.naver}><SiNaver/></button>
            <button onClick={''} className = {Styles.google}><FcGoogle className={Styles.googledetail}/></button>
            </div>  */}
    </div>
    );
}

export default Login;


 
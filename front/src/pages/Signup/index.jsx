
import Styles from "./Signup.module.css";
import Loginbutton from "../../components/Loginbutton";
import Inputwindow from "../../components/Inputwindow";
import CertificationButton from "../../components/CertificationButton";
import { TiDeleteOutline } from 'react-icons/ti';
import {AiFillCheckCircle} from 'react-icons/ai';
import {GrNext} from 'react-icons/gr';
import {FaCheck} from 'react-icons/fa';
import FileUploadButton from "../../components/FileUpload";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

// REACT_APP_SERVER="/users/sign-up";

    
const data ={
    id: "조천산",
        password: "1234",
        name: "조천산",
        email: "1dddd111@naver.com",
        strBirthDate:"19991119",
        nickname: "아서"
};


function Signup(props,{ setBtn }){
    useEffect(()=>{
        props.changeTitle("회원가입");
    })
    const onSignBtn = () => {
        setBtn((x) => !x);
      };
      const {
          register,
          handleSubmit,
          formState: { errors },
          watch,
        } = useForm();
        const password = watch("password");
        function Auth(){
  
            axios
                .post("/users/sign-up", data)
                .then(function (response) {
                        if(response.data.code == 200){
                            console.log(response);
                        } else {
                            let message = response.data.message;
                            if(response.data.code == 400){
                                message = "회원가입에 실패했습니다."
                                console.log("error");
                            }
                        }
                    }).catch(function (error) {
                        if(error.code === "ERR_BAD_REQUEST")
                        {console.log(error);}
                        
                    });
                }
    return(
    <>
    <form className={Styles.page}>
            
                <Label label = "아이디"/>
                <div className ={Styles. certinput}>
                    <input  type="id"
                    placeholder="아이디를 입력해주세요."
                    required
                    {...register("id", {
                        maxLength: {
                        value: 10,
                        message: "10글자 이하로 작성해주세요",
                        },
                        minLength: {
                        value: 1,
                        message: "1글자 이상으로 작성해주세요",
                        },
                        pattern: {
                        value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/,
                        message: "형식에 맞지 않는 아이디입니다.",
                        },
                    })}className = {Styles.smallinput} />
                    <CertificationButton text = "중복확인"/>  
                    </div>
                    
            
            
            <Label label = "비밀번호"/>
            <div className = {Styles.inputcontainer}>
            <input className ={Styles.input}
                type="password"
                {...register("password", {
                maxLength: {
                    value: 20,
                    message: "20자리 이하로 작성해주세요",
                },
                minLength: {
                    value: 8,
                    message: "8자리 이상으로 작성해주세요",
                },
                pattern: {
                    value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/,
                    message: "형식에 맞지 않는 비밀번호 입니다.",
                },
                })}
                placeholder="비밀번호"
                required
            />  
            <button className = {Styles.delbtn}><TiDeleteOutline/></button>
            </div>
             <Label label = "비밀번호 확인"/>
             <div className = {Styles.inputcontainer}>
                    <input className = {Styles.input}
                        type="password"
                        {...register("confirm", {
                        validate: {
                            confirmPw: (v) =>
                            v === password || "비밀번호가 일치하지 않습니다.",
                        },
                        })}
                        placeholder="비밀번호를 한번 더 입력해주세요."
                        required
                    />
                     <button className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
                    </div>
            <Label label = "이름"/>
            <div className = {Styles.inputcontainer}>
            <input placeholder = "실명을 입력하세요. ex) 홍길동" className= {Styles.input}
              type="text"
              required
              {...register("name", {
                maxLength: {
                  value: 5,
                  message: "5자리 이하로 작성해주세요",
                },
                pattern: {
                  value: /^[가-힣a-zA-Z]+$/,
                  message: "형식에 맞지 않는 이름 입니다.",
                },
              })}
            />
            </div>
                 <Label label = "생년월일"/>
                        <div className={Styles.inputcontainer}>
                        <input className = {Styles.input} type="date"
                        min="1900-01-01"
                        max="2003-12-31"
                        required  {...register("birth")} placeholder = "생년월일"/>
                        </div>

            
             <Label label = "이메일 인증"/>
             <div className = {Styles.certinput}> 
                    <input  type="email"
                    placeholder="이메일을 입력해주세요."
                    required
                    {...register("email", {
                        maxLength: {
                        value: 10,
                        message: "10글자 이하로 작성해주세요",
                        },
                        minLength: {
                        value: 1,
                        message: "1글자 이상으로 작성해주세요",
                        },
                        pattern: {
                        value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/,
                        message: "형식에 맞지 않는 이메일 입니다.",
                        },
                    })}
                    className = {Styles.smallinput} />
                    <CertificationButton text = "인증하기"/>  
                    </div>
            
            

            <Label label = "프로필 사진 선택"/>

                {/* <div className={Styles.fileupload}>
                    <FileUploadButton />
                </div>  */}

                <p className={Styles.profiletxt}>사용하실 프로필 이미지를 선택해주세요.</p>
                <Alladmit/>
                <hr/>
                <Smalladmit texts = "(필수) 서비스 이용 약관에 동의"/>
                <Smalladmit texts = "(필수) 본인관련 서비스 관련 이용 약관"/>
                <Smalladmit texts = "(선택) 마케팅 정보 알림 및 수신 동의"/>
                <div className={Styles.signupbutn}>
                    <Loginbutton location = "/landing/login" texts = "Family Moments 시작하기" />
                </div>
            <button onClick={Auth}>에이피아이 전송</button>
    </form>
    </> 
    );
}

export default Signup;

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

function Label(props){
    return(
    <div className = {Styles.labelbox}>
        <label className={Styles.label}>{props.label}</label>
    </div>
    )
}
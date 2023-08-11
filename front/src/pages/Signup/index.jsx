
import Styles from "./Signup.module.css";
import Loginbutton from "../../components/Loginbutton";
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
import { useNavigate } from "react-router-dom";

    
const tempData ={
        id: "조천산",
        password: "1234",
        name: "조천산",
        email: "1dddd111@naver.com",
        strBirthDate:"19991119",
        nickname: "아서"
};

        // "profileImg": "https://familymoments-image-bucket.s3.ap-northeast-2.amazonaws.com/530e581e-0ab9-4e8f-804b-fa1666efd48e.jpg"

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
        const [text, setText] = useState("");
        const [doubleCheck, setDoubleCheck] = useState("");
        const displayText = (e) => {
            setText(e.target.value);
          };
          const doubleCheckText = (e) => {
            setDoubleCheck(e.target.value);
          };
        const onReset = (e) => {
            setText("");
          };
          const doubleCheckReset = (e) => {
            setDoubleCheck("");
          };
          const navigate = useNavigate();
        
        function getAuth(data){
  
            axios
                .post("/users/sign-up", tempData,{
                profileImg: ""
            } )   
            .then(function (response) {
                console.log(response);
                navigate( "/landing/login");
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "다시 한번 확인해주세요."
                   
                  });
            });
                };
                console.log(watch("birth"));
    return(
    <>
    <form  onSubmit={handleSubmit(getAuth)} className={Styles.page}>
            
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
                    <CertificationButton className = {Styles.certbtn}text = "중복확인"/>  
                    </div>
                    
            
            
            <Label label = "비밀번호"/>
            <div className = {Styles.inputcontainer}>
            <input onChange={displayText} className ={Styles.input}
                type="password"
                value={text}
                // {...register("password", {
                // maxLength: {
                //     value: 20,
                //     message: "20자리 이하로 작성해주세요",
                // },
                // minLength: {
                //     value: 8,
                //     message: "8자리 이상으로 작성해주세요",
                // },
                // pattern: {
                //     value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/,
                //     message: "형식에 맞지 않는 비밀번호 입니다.",
                // },
                // })}
                placeholder="비밀번호"
                required
            />  
            <button  onClick = {onReset} className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
            </div>
             <Label label = "비밀번호 확인"/>
             <div className = {Styles.inputcontainer}>
                    <input  onChange={doubleCheckText} className = {Styles.input} 
                        value={doubleCheck}
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
                     <button onClick = {doubleCheckReset} className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
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
                        <input className = {Styles.input} type="number" placeholder = "생년월일 ex)19990101"
                        
                        required  {...register("strBirthDate", {
                            minLength: {
                              value: 8,
                              message: "양식에 맞게 작성해주세요.",
                            },
                          })} />
                        
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
                    <CertificationButton className = {Styles.certbtn} text = "인증하기"/>  
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
                    <Loginbutton  texts = "Family Moments 시작하기" />
                </div>
            <button onClick={getAuth}>에이피아이 전송</button>
    </form>
    </> 
    );
}

export default Signup;

function Alladmit(props){
    return(
       
            <div className={Styles.alladmitbox}>
                <div className={Styles.alladmit}>
                <button className= {`${Styles.checkbutn} ${Styles.allcheckbtn}`}><AiFillCheckCircle/></button>
                <h2 className= {Styles.alladmittxt}>모두 동의합니다</h2>
                </div>
            </div>
      
    );
}

function Smalladmit(props){
    return(
        <div className={Styles.smalladmitbox}>
            <div className={Styles.smalladmit}>
                <button  className = {Styles.checkbutn}><FaCheck/></button>
                <p className={Styles.smalladmittxt}>{props.texts}</p>
                <button className= {Styles.checkbutn}><GrNext/></button>
            </div>
        </div>
    );
}

function Label(props){
    return(
    <div className = {Styles.labelbox}>
        <label className={Styles.label}>{props.label}</label>
    </div>
    )
}
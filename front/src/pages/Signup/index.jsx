
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

    
const newUser ={
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
          resetField,
          watch,
        } = useForm();
    const password = watch("password");        
    const navigate = useNavigate();
        //비밀번호 초기화 버튼 
        function resetPassword(){
            resetField("password");
          };
          //비밀번호 확인 초기화 버튼 
        function resetConfirm(){
            resetField("confirm");
          };
        //회원가입 데이터 전송
        function getAuth(data){
  
            // axios
            //     .post("/users/sign-up", tempData,{
            //     profileImg: ""
            // } )   
            // .then(function (response) {
            //     console.log(response);
            //     navigate( "/landing/login");
            // })
            // .catch(function (error) {
            //     console.log(error);
            //     Swal.fire({
            //         icon: "error",
            //         title: "다시 한번 확인해주세요."
                   
            //       });
            // });

             // Post실행
            const fd = new FormData();
            fd.append("newUser" , new Blob([JSON.stringify(newUser)], { type: 'application/json' }));
            fd.append("profileImg",'');

             axios.post(`/users/sign-up`,fd)
            .then(res=>{
                console.log(res);
            
            })
            .catch(err=>{
                console.log(err);
            })
                };
           //아이디 중복검사 진행 
           const [check, setCheck] = useState(false);
               const idCheck = () => {
                   const id = watch("id");
                   if (id === "") {
                   Swal.fire("값을 먼저 입력해주세요.");
                   } else {
                   axios
                       .get("/users/check-id", { id: id })
                       .then((res) => {
                       if (res.status === 200) {
                           Swal.fire("사용가능한 아이디 입니다.");
                           setCheck(true);
                       }
                       })
                       .catch((error) => {
                       if (error.code === "ERR_BAD_REQUEST") {
                           Swal.fire("중복된 아이디 입니다.");
                           setCheck(false);
                       }
                       });
                   }
                   console.log(id);
               };
               //이메일 중복검사 진행
                const [echeck, setECheck] = useState(false);
                const emailCheck = () => {
                    
                    const email = watch("email");
                    if (email === "") {
                    Swal.fire("값을 먼저 입력해주세요.");
                    } else {
                    axios
                        .get('/users/check-email', { email: email })
                        .then((res) => {
                        if (res.status === 200) {
                            Swal.fire("사용가능한 이메일 아이디 입니다.");
                            setECheck(true);
                        }
                        })
                        .catch((error) => {
                        if (error.code === "ERR_BAD_REQUEST") {
                            Swal.fire("중복된 이메일 아이디 입니다.");
                            setECheck(false);
                        }
                        });
                    }
                    console.log(email);
                };
    return(
    <>
    <form  onSubmit={handleSubmit(getAuth)} className={Styles.page}>
            
                <Label label = "아이디"/>
                <div className ={Styles. certinput}>
                    <input  type="text"
                    placeholder="아이디를 입력해주세요."
                    required
                    {...register("id", {
                        maxLength: {
                        value: 15,
                        message: "15글자 이하로 작성해주세요",
                        },
                        minLength: {
                        value: 5,
                        message: "5글자 이상으로 작성해주세요",
                        },
                        pattern: {
                        value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/,
                        message: "형식에 맞지 않는 아이디입니다.",
                        },
                    })}className = {Styles.smallinput} />
                    <button onClick = {idCheck} className ={Styles.hiddenbtn}><CertificationButton className = {Styles.certbtn}text = "중복확인"/></button> 
                    </div>
                    
            
            
            <Label label = "비밀번호"/>
            <div className = {Styles.inputcontainer}>
            <input  className ={Styles.input}
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
            <button  onClick = {resetPassword} className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
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
                    {/* {errors?.confirm?.message === undefined ? (
                        <div>"비밀번호를 다시 입력해주세요."</div>
                    ) : (
                        <div>{errors?.confirm?.message}</div>
                    )} */}
                     <button onClick = {resetConfirm} className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
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
                    <button className = {Styles.hiddenbtn} onClick={emailCheck}><CertificationButton className = {Styles.certbtn} text = "인증하기"/> </button>
                    </div>
                    <Label label = "닉네임"/>
                        <div className={Styles.inputcontainer}>
                        <input className = {Styles.input} type="text" placeholder = "3~8자리 입력(특수문자 불가)"
                        
                        required  {...register("nickname", {
                            maxLength: {
                                value: 8,
                                message: "8글자 이하로 작성해주세요",
                                },
                            minLength: {
                              value: 3,
                              message: "3글자 이상로 작성해주세요.",
                            }, pattern: {
                                value: /^[가-힣a-zA-Z]+$/,
                                message: "형식에 맞지 않는  닉네임입니다.",
                              },
                          })} />
                        
                        </div>
            

            <Label label = "프로필 사진 선택"/>
            {/* <input style={{"zIndex":"100"}} className = {Styles.input} type="file" onChange={(e)=>{
                const file=e.target.files[0];
                console.log(file);
            }} /> */}
                <div className={Styles.fileupload}>
                    <FileUploadButton />
                </div> 

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
            <input   type="file" onChange={(e)=>{
                const file=e.target.files[0];
                console.log(file);
            }} />
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
        {/* 연습 */}
       
    </div>
    )
}
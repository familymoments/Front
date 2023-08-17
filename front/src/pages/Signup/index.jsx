
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
import {profileImg} from "../../atom";
import { useRecoilValue } from 'recoil';


function Signup(props){
    useEffect(()=>{
        props.changeTitle("회원가입");
    })
    
    const navigate = useNavigate();

    //이미지 업로드 컴포넌트 상태관리
    const [selectedImage, setSelectedImage] = useState();
    
    //react-hook-from 관리
      const {
          register,
          handleSubmit,
          resetField,
          watch,
          formState: { isSubmitting, isSubmitted, errors },
        } = useForm();
        //비밀번호 값 추적
        const password = watch("password");
        // 아이디 값 추적
        const id = watch("id");
        // 이메일 값 추적
        const email = watch("emil");
       
        //비밀번호 인풋 초기화  
        function resetPassword(){
            resetField("password");
          };
        //비밀번호 확인 인풋 초기화
        function resetConfirm(){
            resetField("confirm");
          };
          //이미지 상태관리
          const profile = useRecoilValue(profileImg);

          //이메일 중복검사 진행
          const [eCheck, setECheck] = useState(false);

          //아이디 중복검사 진행 
          const [checkID, setIdCheck] = useState(false);

        //회원가입 데이터 전송
        function getAuth(e){
            e.preventDefault();
             const signUpData ={
                id: watch("id"),
                password: watch("password"),
                name: watch("name"),
                email: watch("email"),
                strBirthDate:watch("strBirthDate"),
                nickname: watch("nickname")
            };

            if(checkID === true && eCheck === true){
            const fd = new FormData();
            fd.append("newUser",new Blob([JSON.stringify(signUpData)], { type: 'application/json' }));
            fd.append("profileImg",profile);
            console.log(signUpData,profile);
            // Post실행
            axios.post(`/users/sign-up`,fd)
            .then((res)=>{
                console.log(res);
                
                if(res.data.code === 200){
                    navigate("/landing/login");
                    Swal.fire('Familt Moments에 가입됐습니다.');
                }
                if(res.data.message === "닉네임 형식을 확인해주세요."){
                    Swal.fire("닉네임 형식을 확인해주세요.");
                }
                if(res.data.message === "비밀번호 형식을 확인해주세요."){
                    Swal.fire("비밀번호 형식을 확인해주세요.");
                }
                if(res.data.message === "생년월일 형식을 확인해주세요."){
                    Swal.fire("생년월일 형식을 확인해주세요.");
                }
                if(res.data.message === "이메일 형식을 확인해주세요."){
                    Swal.fire("이메일 형식을 확인해주세요.");
                }
                if(res.data.message === "이미 가입한 이메일이 존재합니다."){
                    Swal.fire("이미 가입한 이메일이 존재합니다.");
                }
                
                })
                .catch(err=>{
                    console.log(err);
                    Swal.fire("입력하신 값을 다시확인해주세요.");
                })
                }
                else if(checkID === false || eCheck === false){
                    Swal.fire("아이디 혹은 이메일 중복확인을 먼저 실시해주세요.");
                }
                // else if(){

                // }
            };

               const idCheck = (e) => {
                e.preventDefault();
                   if (id === "") {
                   Swal.fire("아이디를 먼저 입력해주세요.");
                   } else {
                   axios
                       .post("/users/check-id", { id: id })
                       .then((res) => {
                        console.log(res);
                       if (res.data.code === 200) {
                           Swal.fire("사용가능한 아이디 입니다.");
                           setIdCheck(true);
                       }
                       if (res.data.code === 400) {
                        Swal.fire("이미 가입한 아이디가 존재합니다.");
                        setIdCheck(false);
                    }
                       })
                       .catch((error) => {
                       if (error.data.code === 400) {
                           Swal.fire("이미 가입한 아이디가 존재합니다.");
                           setIdCheck(false);
                       }
                       });
                   }
                   console.log(checkID);
               };
                const emailCheck = (e) => {
                    e.preventDefault();
                    if (email === "") {
                    Swal.fire("이메일을 먼저 입력해주세요.");
                    } else {
                    axios
                        .post('/users/check-email', { email: email })
                        .then((res) => {
                        console.log(res);
                        if (res.data.code === 200) {
                            Swal.fire("사용가능한 이메일 아이디 입니다.");
                            setECheck(true);
                        }
                        if (res.data.code === 400) {
                            Swal.fire("이미 가입한 이메일이 존재합니다.");
                            setECheck(false);
                        }
                        })
                        .catch((error) => {
                        if (error.data.code === 400) {
                            Swal.fire("이미 가입한 이메일이 존재합니다.");
                            setECheck(false);
                        }
                        });
                    }
                    console.log(eCheck);
                };
                
    return(
    <>
    
    <form  onSubmit={handleSubmit(getAuth)} className={Styles.page}>
            
                <Label label = "아이디"/>
                <div className ={Styles.certinput}>
                    <input  id = "id" type="text" placeholder="아이디를 입력해주세요." className = {Styles.smallinput}
                    //  aria-invalid={isSubmitted ? (errors.id ? "true" : "false") : undefined}
                    {...register("id" ,{
                    required: "영문과 숫자만 사용하여, 6~12글자의 아이디를 입력해주세요",
                    minLength: {
                        value: 6,
                        message: "영문과 숫자만 사용하여, 6~12글자의 아이디를 입력해주세요",
                        },
                    maxLength: {
                        value: 12,
                        message: "영문과 숫자만 사용하여, 6~12글자의 아이디를 입력해주세요",
                        },})} />
                    <button onClick = {idCheck} className ={Styles.hiddenbtn}><CertificationButton className = {Styles.certbtn}text = "중복확인"/></button> 
                    </div>
                {errors.id && <small className = {Styles.alert} role="alert">{errors.id.message}</small>}
            <Label label = "비밀번호"/>
            <div className = {Styles.inputcontainer}>
            <input  className ={Styles.input}  type="password"
             aria-invalid={isSubmitted? errors.password? "true" : "false": undefined }
                {...register("password",{
                    required: 
                    "영문과 숫자를 사용하여, 8~12글자의 비밀번호를 입력해주세요 ",
                    minLength: {
                        value: 8,
                        message: "영문과 숫자를 사용하여, 8~12글자의 비밀번호를 입력해주세요",
                },
                    maxLength: {
                        value: 12,
                        message: "영문과 숫자를 사용하여, 8~12글자의 비밀번호를 입력해주세요",
                },})}
                placeholder="비밀번호"
            />  
            <button  onClick = {resetPassword} className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
            </div>
             <Label label = "비밀번호 확인"/>
             <div className = {Styles.inputcontainer}>
                    <input className = {Styles.input} type="password"  placeholder="비밀번호를 한번 더 입력해주세요."
                        {...register("confirm",  {
                            required:"비밀번호가 일치하지 않습니다",
                            validate: {
                              confirmPw: (v) =>
                                 v === password || "비밀번호가 일치하지 않습니다",
                            },
                          })}/>
                     <button onClick = {resetConfirm} className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
                    </div>
                    {errors.confirm && <small className = {Styles.alert}role="alert">{errors.confirm?.message}</small>}
           
         
            <Label label = "이름"/>
            <div className = {Styles.inputcontainer}>
            <input placeholder = "실명을 입력하세요. ex) 홍길동" className= {Styles.input}
              type="text"
              required
              {...register("name")}
            />
            </div>
                 <Label label = "생년월일"/>
                    <div className={Styles.inputcontainer}>
                        <input className = {Styles.input} type="number" placeholder = "생년월일 ex)19990101"
                        {...register("strBirthDate", {required:"", minLength: {value: 4,},maxLength: {value: 4,}},)}/>
                    </div>
                        

             <Label label = "이메일 인증"/>
             <div className = {Styles.certinput}> 
                    <input  type="email"
                    placeholder="이메일을 입력해주세요."
                    required
                    {...register("email")}
                    className = {Styles.smallinput} />
                    <button className = {Styles.hiddenbtn} onClick={emailCheck}><CertificationButton className = {Styles.certbtn} text = "중복확인"/> </button>
                    </div>
                    <Label label = "닉네임"/>
                        <div className={Styles.inputcontainer}>
                        <input className = {Styles.input} type="text" placeholder = "3~8자리 입력(특수문자 불가)"
                        required  {...register("nickname")} />
                        </div>
            

            <Label label = "프로필 사진 선택"/>
                <div className={Styles.fileupload}>
                    <FileUploadButton className = {Styles.filebtndetail}onselectImage={setSelectedImage}/>
                </div> 
                <p className={Styles.profiletxt}>사용하실 프로필 이미지를 선택해주세요.</p>
                <Alladmit/>
                <hr/>
                <Smalladmit texts = "(필수) 서비스 이용 약관에 동의" location = "/signup/TOS1"/>
                <Smalladmit texts = "(필수) 본인관련 서비스 관련 이용 약관" location = "/signup/TOS2"/>
                <Smalladmit texts = "(선택) 마케팅 정보 알림 및 수신 동의" location = "/signup/TOS3"/>
                <div  className={Styles.signupbutn}>
                    <button type = "submit" className = {Styles.hiddenbtn}><Loginbutton  texts = "Family Moments 시작하기" /></button>
                </div>
    </form>
    </> 
    );
}

export default Signup;

function Alladmit(props){
    return(
       
            <div className={Styles.alladmitbox}>
                <div className={Styles.alladmit}>
                <button type = "button"className= {`${Styles.checkbutn} ${Styles.allcheckbtn}`}><AiFillCheckCircle/></button>
                <h2 className= {Styles.alladmittxt}>모두 동의합니다</h2>
                </div>
            </div>
      
    );
}

function Smalladmit(props){
    const navigate = useNavigate();
    return(
        <div className={Styles.smalladmitbox}>
            <div className={Styles.smalladmit}>
                <button  type="button" className = {Styles.checkbutn}><FaCheck/></button>
                <p className={`${Styles.smalladmittxt}`}>{props.texts}</p>
                <button type="button" className= {Styles.checkbutn} onClick={()=>{navigate(props.location)}}><GrNext/></button>
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
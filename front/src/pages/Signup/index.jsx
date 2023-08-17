
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
    const [selectedImage, setSelectedImage] = useState();
    useEffect(()=>{
        props.changeTitle("회원가입");
    })
    
      const {
          register,
          handleSubmit,
          resetField,
          watch,
        } = useForm();
           
    const navigate = useNavigate();
        //비밀번호 초기화  
        function resetPassword(){
            resetField("password");
          };
        //비밀번호 확인 초기화
        function resetConfirm(){
            resetField("confirm");
          };
          //이미지 상태관리
          const profile = useRecoilValue(profileImg);
        //회원가입 데이터 전송
        function getAuth(){
             
             const signUpData ={
                id: watch("id"),
                password: watch("password"),
                name: watch("name"),
                email: watch("email"),
                strBirthDate:watch("strBirthDate"),
                nickname: watch("nickname")
                 };
                 //if(check == true && echeck ==true){}
                 //else{Swal()}
            const fd = new FormData();
            fd.append("newUser",new Blob([JSON.stringify(signUpData)], { type: 'application/json' }));
            fd.append("profileImg",profile);
            console.log(signUpData,profile);
            // Post실행
            axios.post(`/users/sign-up`,fd)
            .then((res)=>{

                if(res.data.code == 200){
                    navigate("/landing/login");
                }
                if(res.data.code == 400){
                    Swal.fire("입력하신 값을 다시확인해주세요.");
                }
            })
            .catch(err=>{
                console.log(err);
                Swal.fire("입력하신 값을 다시확인해주세요.");
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
                       .post("/users/check-id", { id: id })
                       .then((res) => {
                       if (res.data.code === 200) {
                           Swal.fire("사용가능한 아이디 입니다.");
                           setCheck(true);
                       }
                       })
                       .catch((error) => {
                       if (error.data.code === 400) {
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
                        .post('/users/check-email', { email: email })
                        .then((res) => {
                        if (res.data.code === 200) {
                            Swal.fire("사용가능한 이메일 아이디 입니다.");
                            setECheck(true);
                        }
                        })
                        .catch((error) => {
                        if (error.data.code === 400) {
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
                <div className ={Styles.certinput}>
                    <input  type="text"
                    placeholder="아이디를 입력해주세요."
                    required
                    {...register("id")}className = {Styles.smallinput} />
                    <button onClick = {idCheck} className ={Styles.hiddenbtn}><CertificationButton className = {Styles.certbtn}text = "중복확인"/></button> 
                    </div>
            <Label label = "비밀번호"/>
            <div className = {Styles.inputcontainer}>
            <input  className ={Styles.input}
                type="password"
                {...register("password")}
                placeholder="비밀번호"
                required
            />  
            <button  onClick = {resetPassword} className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
            </div>
             <Label label = "비밀번호 확인"/>
             <div className = {Styles.inputcontainer}>
                    <input className = {Styles.input} 
                        type="password"
                        {...register("confirm")}
                        placeholder="비밀번호를 한번 더 입력해주세요."
                        required
                    />
                     <button onClick = {resetConfirm} className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
                    </div>
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
                        
                        required  {...register("strBirthDate")} />
                        
                        </div>
                        

             <Label label = "이메일 인증"/>
             <div className = {Styles.certinput}> 
                    <input  type="email"
                    placeholder="이메일을 입력해주세요."
                    required
                    {...register("email")}
                    className = {Styles.smallinput} />
                    <button className = {Styles.hiddenbtn} onClick={emailCheck}><CertificationButton className = {Styles.certbtn} text = "인증하기"/> </button>
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
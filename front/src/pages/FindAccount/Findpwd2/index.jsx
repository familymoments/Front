import CertificationButton from '../../../components/CertificationButton';
import Loginbutton from '../../../components/Loginbutton';
import Styles from './Findpwd2.module.css'
import Inputwindow from '../../../components/Inputwindow';
import { TiDeleteOutline } from 'react-icons/ti';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
function Findpwd2(props){
//react-hook-form 선언
const {
    register,
    handleSubmit,
    watch,
    resetField,
  } = useForm();
   //이름 초기화 버튼 
   function resetName(){
    resetField("name");
  };
    //이메일 중복검사 진행
    const [echeck, setECheck] = useState(false);
             //이메일 전송
             const sendEmail = () => {
                
                const name = watch("name");
                const email = watch("email");
                
               if (email === "") {
               Swal.fire("값을 먼저 입력해주세요.");
               } else {
               axios
                   .post('/users/auth/send-email', { 
                       name: name,
                       email: email })
                   .then((res) => {
                   if (res.data.code === 200) {
                       Swal.fire("이메일이 전송됐습니다.");
                       console.log(res);
                       setECheck(true);
                   }
                   if (res.data.code === 400) {
                    Swal.fire("이메일 형식을 확인해주세요.");
                    setECheck(false);
                   }
                    if (res.data.code === 404) {
                        Swal.fire("이름과 이메일이 정확히 입력됐는지 확인해주세요.");
                        setECheck(false);
                    }
                   })
                   .catch((error) => {
                   if (error.data.code === 400) {
                       Swal.fire("이메일 형식을 확인해주세요.");
                       setECheck(false);
                   }
                   if (error.data.code === 404) {
                       Swal.fire("이름과 이메일이 정확히 입력됐는지 확인해주세요.");
                       setECheck(false);
                   }
                   });
               }
               console.log(email);
               console.log(name);
               
           };

           const getAuth = (e) => {
               if(echeck === true){
               axios
               .post("/users/auth/find-pwd", e)   
               .then(function (res) {
                   console.log(res);
                   if (res.data.code === 200) {
                       console.log(e);
                       
                       navigate( "/landing/findpwd3");
                   }
                   if (res.data.code === 404) {
                       Swal.fire("이메일과 인증번호를 다시 한번 확인해주세요.");
                   }
                   if (res.data.code === 400) {
                       Swal.fire("인증번호가 일치하지 않습니다.");
                   }
                   
               })
               .catch(function (err) {
                   Swal.fire("일치하는 회원 정보가 없습니다.");
                   });
                    }
                   else if (echeck === false){
                       Swal.fire("이메일 인증을 먼저해주세요.");
                   }
               console.log(e);
              
           };


    useEffect(()=>{
        props.changeTitle("비밀번호 찾기");
    })
    const navigate = useNavigate();
    return(
        <>
        <div className={Styles.top}>
        <h1 className = {Styles.findidtext}>비밀번호 찾기</h1>
        <p className = {Styles.topsmalltext}>본인 확인을 위하여 이메일로 인증해주세요</p>
        </div>
        <form onSubmit={handleSubmit(getAuth)}>
              <label className = {Styles.topname}>이름</label>
                    <div className = {Styles.nameform}>
                    <input placeholder = "실명을 입력하세요. ex) 홍길동" className= {Styles.input}
                    type="text"
                    required
                    {...register("name")}
                    />
                    <button onClick = {resetName} className = {Styles.deletebutton} type = "button"><TiDeleteOutline/></button> 
                    </div>

        <label id ={Styles.bottom}>이메일</label>
        <div className={Styles.confirmemail}>
            <div className={Styles.certification}>
            <input className = {Styles.email} type='email' placeholder = 'example@email.com'
            required
            {...register("email"
               )}/>
            <button onClick = {sendEmail} className = {Styles.hiddenbtn}><CertificationButton text = "인증하기"/></button>
            </div>
            <div><input className = {Styles.input}  type = "number" placeholder="인증번호"
            required  {...register("code")}/></div>
        </div>

        <div className= {Styles.findidbutton}>
        <button type = "submit" className = {Styles.hiddenbtn}><Loginbutton texts = "순간을 가족에게 공유하기"/></button>
        </div>
    </form>
    </>
        );
}

export default Findpwd2;
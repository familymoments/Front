import CertificationButton from '../../../components/CertificationButton';
import Loginbutton from '../../../components/Loginbutton';
import Styles from './Findid.module.css'
import { TiDeleteOutline } from 'react-icons/ti';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useRecoilState } from 'recoil';
import { idFounded } from "../../../atom";

function Findid(props){
    const SERVER = process.env.REACT_APP_SERVER_URL;
    //상태관리
  const [idfounded,setIdFounded] = useRecoilState(idFounded);
  //헤더 문구
    useEffect(()=>{
        props.changeTitle("아이디 찾기");
    })
    //react-hook-form 선언
    const {
        register,
        handleSubmit,
        watch,
        resetField,
      } = useForm();
    const navigate = useNavigate();
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
                    .post(`${SERVER}/users/auth/send-email`, { 
                        name: name,
                        email: email })
                    .then((res) => {
                    if (res.data.code === 200) {
                        Swal.fire("이메일이 전송됐습니다.");
                        console.log(res);
                        setECheck(true);
                    }
                    })
                    .catch((error) => {
                    if (error.data.code === 400) {
                        Swal.fire("이메일 형식을 확인해주세요.");
                        setECheck(false);
                    }
                    if (error.data.code === 404) {
                        Swal.fire("일치하는 회원 정보가 없습니다.");
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
                .post(`${SERVER}/users/auth/find-id`, e)   
                .then(function (res) {
                    console.log(res);
                    if (res.data.code === 200) {
                        console.log(e);
                        setIdFounded(res.data.result);
                        navigate( "/landing/findid2");
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
    return(
        <>
            <div className={Styles.top}>
            <h1 className = {Styles.findidtext}>아이디 찾기</h1>
            <p className = {Styles.topsmalltext}>본인 확인을 위하여 이메일로 인증해주세요</p>
            </div>
            <form onSubmit={handleSubmit(getAuth)}>
                  <label className = {Styles.topname}>이름</label>
                        <div className = {Styles.nameform}>
                        <input placeholder = "실명을 입력하세요. ex) 홍길동" className= {Styles.input}
                        type="text"
                        required
                        {...register("name", {
                            // maxLength: {
                            // value: 5,
                            // message: "5자리 이하로 작성해주세요",
                            // },
                            //  pattern: {
                            //  value: /^[가-힣a-zA-Z]+$/,
                            // message: "형식에 맞지 않는 이름 입니다.",
                            //  },
                        })}
                        />
                        <button onClick = {resetName} className = {Styles.deletebutton} type = "button"><TiDeleteOutline/></button> 
                        </div>

            <label id ={Styles.bottom}>이메일</label>
            <div className={Styles.confirmemail}>
                <div className={Styles.certification}>
                <input className = {Styles.email} type='email' placeholder = 'example@email.com'
                required
                {...register("email", {
                    // pattern: {
                    // value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/,
                    // message: "형식에 맞지 않는 이메일 입니다.",
                    // },
                })}/>
                <button onClick = {sendEmail} type = "button"className = {Styles.hiddenbtn}><CertificationButton text = "인증하기"/></button>
                </div>
                <div className={Styles.certnum}><input className = {Styles.input}  type = "number" placeholder="인증번호"
                required  {...register("code", {
                    // minLength: {
                    //   value: 6,
                    //   message: "양식에 맞게 작성해주세요.",
                    // },
                  })}/></div>
            </div>

            <div className= {Styles.findidbutton}>
            <button type = "submit" className = {Styles.hiddenbtn}><Loginbutton texts = "순간을 가족에게 공유하기"/></button>
            </div>
        </form>
        </>);
}
export default Findid;
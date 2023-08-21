
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
import {profileImg, click} from "../../atom";
import { useRecoilState, useRecoilValue } from 'recoil';

function Signup(props){
    useEffect(()=>{
        props.changeTitle("회원가입");
    })
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const navigate = useNavigate();

    //이미지 업로드 컴포넌트 상태관리
    const [electedImage, setSelectedImage] = useState();
    
    //react-hook-from 관리
      const {
          register,
          handleSubmit,
          resetField,
          watch,
          formState: { errors },
        } = useForm();
        //비밀번호 값 추적
        const password = watch("password");
        // 아이디 값 추적
        const id = watch("id");
        // 이메일 값 추적
        const email = watch("email");
       
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
            
             const signUpData ={
                id: watch("id"),
                password: watch("password"),
                name: watch("name"),
                email: watch("email"),
                strBirthDate:watch("strBirthDate"),
                nickname: watch("nickname")
            };

            if(checkID === true && eCheck === true && admit === true){
            const fd = new FormData();
            fd.append("newUser",new Blob([JSON.stringify(signUpData)], { type: 'application/json' }));
            fd.append("profileImg",profile);
            console.log(signUpData,profile);
            // Post실행
            axios.post(`${SERVER}/users/sign-up`,fd)
            .then((res)=>{
                console.log(res);
                
                if(res.data.code === 200){
                    navigate("/landing/login");
                    Swal.fire('Familt Moments에 가입됐습니다.');
                }
                if(res.data.message === "닉네임 형식을 확인해주세요."){
                    Swal.fire("닉네임 형식을 확인해주세요.");
                }if(res.data.message === "이름을 입력해주세요."){
                    Swal.fire("이름을 입력해주세요.");
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
                // else if(admit === false ){

                // }
            };

               const idCheck = (e) => {
                //e.preventDefault();
                   if (id === "") {
                   Swal.fire("아이디를 먼저 입력해주세요.");
                   } else {
                   axios
                       .post(`${SERVER}/users/check-id`, { id: id })
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
               console.log(email);
                function emailCheck (){
                    if (email === "") {
                    Swal.fire("이메일을 먼저 입력해주세요.");
                    } else {
                    axios
                        .post(`${SERVER}/users/check-email`, { email: email })
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
                const [allClicked, setAllClicked] = useState(false);
                const [admit, setAdmit] = useRecoilState(click);
                function Smalladmit(props){
                    const [clicked, setClicked] = useRecoilState(click);
                    //allClicked == true ? setClicked(true) : setClicked(false)
                     return(
                         <div className={Styles.smalladmitbox}>
                             <div className={Styles.smalladmit}>
                                 <button  onClick={()=>{{clicked === false ? setClicked(true): setClicked(false)}
                                 console.log(clicked)}}
                                 className = {`${Styles.checkbutn}
                             ${clicked === true ? Styles.clickedbtn : Styles.unclickedbtn}
                            `}
                                 type="button"  ><FaCheck/></button>
                                 <p className={`${Styles.smalladmittxt}`}>{props.texts}</p>
                                 <button type="button" className= {Styles.checkbutn} onClick={()=>{navigate(props.location)}}><GrNext/></button>
                             </div>
                         </div>
                     );
                 }
    return(
    <form  onSubmit={handleSubmit(getAuth)}  className={Styles.page}>
                <Label label = "아이디"/>
                <div className ={Styles.certinput}>
                    <input  id ="id" type="text" placeholder="아이디를 입력해주세요." className = {Styles.smallinput}
                    {...register("id" ,{
                    required:"사용하실 아이디를 입력해주세요",
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
                    <button onClick = {idCheck} className ={Styles.hiddenbtn}><CertificationButton className = {Styles.certbtn}text = "중복확인"/></button> 
                    </div>
                
                {errors.id && <p className = {Styles.alert} role="alert">{errors.id.message}</p>}
                  
            <Label label = "비밀번호"/>
            <div className = {Styles.inputcontainer}>
            <input  className ={Styles.input}  type="password"
            
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
                },
                pattern: {
                    value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{8,12}$/,
                    message: "영문과 숫자를 사용하여, 8~12글자의 비밀번호를 입력해주세요.",
                },
                })}
                placeholder="비밀번호"
            />  
            <button  onClick = {resetPassword}type = "button" className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
            </div>
            {errors.password && <p className = {Styles.alert} role="alert">{errors.password.message}</p>}
             <Label label = "비밀번호 확인"/>
             <div className = {Styles.inputcontainer}>
                    <input id="confirm" className = {Styles.input} type="password"  placeholder="비밀번호를 한번 더 입력해주세요."
                        {...register("confirm",  {
                            required:"입력한 비밀번호가 일치하지 않습니다",
                            validate: {
                              confirmPw: (v) =>
                                 v === password || "입력한 비밀번호가 일치하지 않습니다",
                            },
                          })}/>
                     <button onClick = {resetConfirm} type = "button"className = {Styles.delbtn}><TiDeleteOutline className = {Styles.delbtndetail}/></button>
                    </div>
                    {errors.confirm && <p className = {Styles.alert} role="alert">{errors.confirm.message}</p>}
                   
            <Label label = "이름"/>
            <div className = {Styles.inputcontainer}>
            <input placeholder = "실명을 입력하세요. ex) 홍길동" className= {Styles.input}
              type="text"
              {...register("name",  {
                maxLength: {
                  value: 5,
                  message: "5자리 이하로 작성해주세요",
                },
                minLength: {
                    value: 2,
                    message: "2자리 이상으로 작성해주세요",
                  },
                // pattern: {
                //     value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{2,5}$/,
                //     message: "이름이 올바르게 입력됐는지 확인해주세요.",
                //       },
            })}
            />
            </div>
            <Label label = "생년월일"/>
                <div className={Styles.inputcontainer}>
                    <input className = {Styles.input} type="number" placeholder = "생년월일 ex)19990101"
                    {...register("strBirthDate", { maxLength: {value: 8}},)}/>
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
            {errors.email && <p className = {Styles.alert} role="alert">{errors.email.message}</p>}
            <Label label = "닉네임"/>
                <div className={Styles.inputcontainer}>
                    <input className = {Styles.input} type="text" placeholder = "3~8자리 입력(특수문자 불가)"
                        required  {...register("nickname"
                        ,{
                            required: 
                            "영문과 숫자를 사용하여, 3~8글자의 닉네임을 입력해주세요 ",
                            minLength: {
                                value: 3,
                                message: "영문과 숫자를 사용하여, 3~8글자의 닉네임을입력해주세요",
                        },
                            maxLength: {
                                value: 8,
                                message: "영문과 숫자를 사용하여, 3~8글자의 닉네임을 입력해주세요",
                        },
                        // pattern: {
                        //     value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/,
                        //     message: "영문과 숫자를 사용하여, 3~8글자의 닉네임을 입력해주세요.",
                        // },
                        })}/>
                </div>
                {errors.nickname && <p className = {Styles.alert} role="alert">{errors.nickname.message}</p>}

            <Label label = "프로필 사진 선택"/>
                <div className={Styles.fileupload}>
                    <FileUploadButton className = {Styles.filebtndetail} onSelectImage={setSelectedImage}/>
                </div> 
                <p className={Styles.profiletxt}>사용하실 프로필 이미지를 선택해주세요.</p>
                <div className={Styles.alladmitbox}>
                                <div className={Styles.alladmit}>
                                <button onClick={()=>{
                                    {allClicked === false ? setAllClicked (true) : setAllClicked(false)}
                                    {allClicked === false ? setAdmit (true) : setAdmit(false)}
                                    console.log(allClicked);
                            }} 
                                className= {`${Styles.checkbutn} ${Styles.allcheckbtn}
                                ${allClicked === true ? Styles.clickedbtn : Styles.unclickedbtn}`}
                                type = "button"><AiFillCheckCircle/></button>
                                <h2 className= {Styles.alladmittxt}>모두 동의합니다</h2>
                                </div>
                            </div>
                <hr/>
                <Smalladmit texts = "(필수) 서비스 이용 약관에 동의" location = "/signup/TOS1"/>
                <Smalladmit texts = "(필수) 본인관련 서비스 관련 이용 약관" location = "/signup/TOS1"/>
                <Smalladmit texts = "(선택) 마케팅 정보 알림 및 수신 동의" location = "/signup/TOS1"/>
                <div  className={Styles.signupbutn}>
                    <button type = "submit" className = {Styles.hiddenbtn}><Loginbutton  texts = "Family Moments 시작하기" /></button>
                </div>
    </form>
    );
}

export default Signup;


function Label(props){
    return(
    <div className = {Styles.labelbox}>
        <label className={Styles.label}>{props.label}</label>
    </div>
    )
}

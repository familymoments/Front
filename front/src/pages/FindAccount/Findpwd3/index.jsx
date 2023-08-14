import Styles from "./Findpwd3.module.css";
import Loginbutton from "../../../components/Loginbutton";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { ID } from "../../../atom";
function Findpwd3(props){
    useEffect(()=>{
        props.changeTitle("회원가입");
    })
    //id
     const id = useRecoilValue(ID);
    //navigate
    const navigate = useNavigate();
    //react-hook-form 선언
    const {
        register,
        handleSubmit,
        watch,
        resetField,
      } = useForm();
      const getAuth = (e) => {
        const passwordA=watch("passwordA")  
        const passwordB=watch("passwordB")

        if(passwordA == "" || passwordB == ""){
            Swal.fire("새로운 비밀번호를 입력해주십시오.");
        }
        else {
        axios
        .patch(`/users/auth/modify-pwd?id=${id}`, e)   
        .then(function (res) {
            console.log(res);
            if (res.data.code === 200) {
                console.log(e);
                navigate( "/landing/findpwd3");
            }
            if (res.data.code === 404) {
                Swal.fire("존재하지 않는 아이디입니다.");
            }
            if (res.data.code === 400) {
                Swal.fire("입력한 비밀번호와 일치하지 않습니다.");
            }
            
        })
        .catch(function (err) {
            Swal.fire("일치하는 회원 정보가 없습니다.");
            });
        }
        console.log(e);
       
    };

    return(
        
        <form onSubmit={handleSubmit(getAuth)}>
            
            <h1 className={Styles.title}>비밀번호 재설정</h1>
            <div className={Styles.txtlocation}>
            <h className = {Styles.txts}>새로운 비밀번호를 입력해주세요.</h>
            </div>
            <div className={Styles.inputlocation}>
                <input className = {Styles.inputstyle} placeholder="새 비밀번호"
                type = "password"
                required
                {...register("passwordA")}/>
                <input className = {Styles.inputstyle} placeholder="새 비밀번호 확인"
                type = "password"
                required
                {...register("passwordB")}/>
            </div>
            <div className={Styles.buttonlocation}>
                <button type = "submit" className={Styles.hiddenbtn}><Loginbutton texts =" 순간을 가족에게 공유하기"/></button>
            </div>

        </form>
    );
}

export default Findpwd3;
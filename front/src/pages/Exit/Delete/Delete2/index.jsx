import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import styles from "../../Withdrawal/Withdraw2/Withdraw2.module.css";
import InviteLinkBar from "../../../../components/InviteLinkBar";
import{useNavigate} from "react-router-dom"
import {header} from "../../../../atom";
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import {useForm} from "react-hook-form";
const Delete2 = (data) => {
    const navigate = useNavigate();
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const headers = useRecoilValue(header);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    function confirmPW(){
    console.log(headers);
    console.log(data);
    const password = watch("password");
    axios.post(`${SERVER}/users/auth/compare-pwd`,{password:password},{headers})
    .then(function (res) {
        console.log(res);
        if(res.data.code === 200){
            navigate("/Main/delete3");
        }
        if(res.data.code === 400){
           
        }
        if(res.data.code === 403){
           
        }
        
    }).catch(function (err) {
       console.log(err);
    });}
    return (
        <form onSubmit={handleSubmit(confirmPW)}>
            <div className={styles.content1}>
            <MyText text={
            <>
                계속 진행하려면 보안을 위해<br/>
                현재 비밀번호를 입력해주세요.<br/><br/>
            </>
            } />
            </div>  
            <div className={styles.bar}>
            <input id ="password" className = {styles.password}  type='password'  placeholder='현재 비밀번호' 
                {...register("password", {
                    required: 
                    "비밀번호가 올바르지 않습니다.",
            }
            )}/>
            </div>
            {errors.password && <small className = {styles.alert}role="alert">{errors.password.message}</small>}        
            <button type="submit" className={styles.hiddenbtn}><Button btn={styles.btn} title="계속하기"/></button>
        </form>
    );
}

export default Delete2;

import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import styles from "../../Withdrawal/Withdraw2/Withdraw2.module.css";
import InviteLinkBar from "../../../../components/InviteLinkBar";
import{useNavigate} from "react-router-dom"
import {header} from "../../../../atom";
import { useRecoilValue } from 'recoil';
import axios from 'axios';
import {useForm} from "react-hook-form";
const Delete2 = () => {
    const navigate = useNavigate();
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const headers = useRecoilValue(header);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    function deleteFamily(){
    //const familyId
    axios.get(`${SERVER}/families/`,{headers})
    .then(function (res) {
        console.log(res);
        navigate("/landing/newfamily");
    }).catch(function (err) {
       console.log(err);
    });}
    return (
        <form>
            <div className={styles.content1}>
            <MyText text={
            <>
                계속 진행하려면 보안을 위해<br/>
                현재 비밀번호를 입력해주세요.<br/><br/>
            </>
            } />
            </div>  
            <div className={styles.bar}>
            <input/> 
            </div>        
            <Button 
                onClick={()=>{navigate("/Main/delete3")}}
                btn={styles.btn} 
                title="계속하기"
            />
        </form>
    );
}

export default Delete2;

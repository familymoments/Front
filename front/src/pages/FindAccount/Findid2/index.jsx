import Styles from "./Findid2.module.css"
import { useNavigate } from "react-router-dom";
import BubbleButton from "../../../components/BubbleButton";
import { useRecoilValue } from 'recoil';
import {idFounded} from "../../../atom";

function Findid2(){
    const navigate = useNavigate();
    const showId = useRecoilValue(idFounded);
    return (
    <div className = {Styles.page}>
        
        <h1 className = {Styles.toptext}>아이디 찾기</h1>
        <p className={Styles.p}>고객님의 정보와 일치하는 아이디입니다.</p>
        <div className = {Styles.inputbox}>
        <div className={Styles.idinput}>{showId}</div>
        </div>
        <div className= {Styles.buttons}>
            <div lassName = {Styles.ok}>
        <BubbleButton location = "/landing/login" type = "purple" text ="로그인 하기" layout = ""/>
        </div>
        < div className = {Styles.no}>
        <BubbleButton  location ="/landing/findpwd"type = "blue" text =" 비밀번호 찾기" layout = ""/>
        </div>
        </div>
    </div>);
}
export default Findid2;
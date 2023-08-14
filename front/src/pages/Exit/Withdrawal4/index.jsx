import Button from "../../../components/Button";
import MyText from "../../../components/MyText";
import classes from "../Withdrawal/Withdrawal.module.css";

import{useNavigate} from "react-router-dom"


const Withdrawal4 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.content1}>
            <MyText text={
            <>
                멤버를 탈퇴시키면 탈퇴된 멤버는<br/>
                우리 가족 소식을 더 이상 보지 못합니다.<br/><br/>
                또한, 가족 탈퇴 시, 해당 유저가 작성한<br/>
                게시글 및 댓글이 모두 삭제됩니다.<br/><br/>
            </>
            } />
            <div className={classes.bold}>
                <MyText text={
                    <b>정말 탈퇴하시겠습니까?</b>
                } />
            </div>
            </div>            
            <Button 
                onClick={()=>{navigate()}}
                btn={classes.btn3} 
            />
            <Button 
                onClick={()=>{navigate()}}
                btn={classes.btn} 
                />
        </div>
    );
}

export default Withdrawal4;

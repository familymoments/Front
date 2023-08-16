import Button from "../../../components/Button";
import MyText from "../../../components/MyText";
import classes from "../../Exit/SetUp/Setting/Setting.module.css";
import{useNavigate} from "react-router-dom"


const Withdraw4 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.content1}>
            <MyText text={
            <>
            우리 가족을 탈퇴하면 우리 가족 소식을<br/>
            더이상 보지 못합니다.<br/>
            또한,  가족 탈퇴 시, 해당 유저가 작성한<br/>
            게시글 및 댓글이 모두 삭제됩니다.
            </>
            } />
            <div className={classes.bold}>
                <MyText text={
                    <b>정말 탈퇴하시겠습니까?</b>
                } />
            </div>
            </div>            
            <Button 
                onClick={()=>{navigate("/Main/delete4")}}
                btn={classes.btn3} 
                title="계속하기"
            />
            <Button 
                onClick={()=>{navigate()}}
                btn={classes.btn} 
                title="취소"
                />
        </div>
    );
}

export default Withdraw4;

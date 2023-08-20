import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import classes from "./Resign1.module.css";

const Resign1 = ({idxHandler}) => {
    const nav = useNavigate();

    const cancelHandler = () => {
        nav("/main/my")
    }
    
    return (
        <div className={classes.wrapper}>
            <p className={classes.p}>
                계정 삭제는 <span className={classes.red}>영구적</span>입니다. 
                <br/>
                이 계정을 삭제하면 회원님의 프로필,
                <br/>
                사진, 댓글, 좋아요가 영구적으로 삭제됩니다.
            </p>
            <p className={classes.p}>
                또한, 계정 탈퇴 시, 해당 유저가 작성했던
                <br/>
                게시물 및 댓글은 모두 삭제됩니다.
            </p>
            <h3 className={classes.h3}>정말 탈퇴하시겠습니까?</h3>
            <Button title="계속하기" btn={classes.btn} onClick={() => idxHandler(1)}/>
            <Button title="취소" btn={classes.btn2} onClick={cancelHandler}/>
        </div>
    );
};

export default Resign1;

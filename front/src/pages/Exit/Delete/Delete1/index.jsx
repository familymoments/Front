import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import classes from "../../SetUp/Setting/Setting.module.css";
import{useNavigate} from "react-router-dom"
const Delete1 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.content1}>
            <MyText text={
                    <>
                        가족을 삭제하게 되면<br/>
                        가족 멤버가 작성한 가족 앨범의 모든<br/>
                        게시글 및 댓글이 모두 삭제됩니다.<br/><br/>
                        가족 탈퇴가 아닌 삭제를 원하시는 것인지<br/>
                        다시 한번 확인해주시기 바랍니다.
                    </>
            } />
            <div className={classes.bold3}>
                <b>정말 삭제하시겠습니까?</b>
            </div>
            </div>            
            <Button 
                onClick={()=>{navigate("/Main/delete2")}}
                btn={classes.btn3} 
                title="계속하기"
            />
            <Button 
                onClick={()=>{navigate("/main/my")}}
                btn={classes.btn} 
                title="취소"
                />
        </div>
    );
}

export default Delete1;

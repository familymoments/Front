import Button from "../../../components/Button";
import MyText from "../../../components/MyText";
import classes from "../../Exit/SetUp/Setting/Setting.module.css";
import{useNavigate} from "react-router-dom"


const Check = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.bold2}>
                <MyText text={
                    <b>우리 가족을 정말 탈퇴하시겠습니까?</b>
                } />
            </div>  
            <Button 
                onClick={()=>{navigate("/landing/newfamily")}}
                btn={classes.btn3} 
                title="계정 탈퇴"
            />
            <Button 
                onClick={()=>{navigate()}}
                btn={classes.btn} 
                title="취소"
                />
        </div>
    );
}

export default Check;

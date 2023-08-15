import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import classes from "../../SetUp/Setting/Setting.module.css";
import{useNavigate} from "react-router-dom"


const Withdraw2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.bold2}>
                <MyText text={
                    <b>정말 우리 가족에서 탈퇴시키겠습니까?</b>
                } />
            </div>  
            <Button 
                onClick={()=>{navigate()}}
                btn={classes.btn3} 
                title="탈퇴시키기"
            />
            <Button 
                onClick={()=>{navigate()}}
                btn={classes.btn} 
                title="취소"
                />
        </div>
    );
}

export default Withdraw2;

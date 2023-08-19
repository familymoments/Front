import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import classes from "../../SetUp/Setting/Setting.module.css";
import{useNavigate} from "react-router-dom"


const Delete3 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.bold4}>
                <b>정말 우리 가족을 삭제하시겠습니까?</b>
            </div>  
            <Button 
                onClick={()=>{navigate("/landing/newfamily")}}
                btn={classes.btn3} 
                title="삭제하기"
            />
            <Button 
                onClick={()=>{navigate()}}
                btn={classes.btn} 
                title="취소"
                />
        </div>
    );
}

export default Delete3;

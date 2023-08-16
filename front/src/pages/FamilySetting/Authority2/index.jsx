import MyText from "../../../components/MyText";
import classes from "../../Exit/SetUp/Setting/Setting.module.css";
import PersonInfo from "../../../components/PersonInfo";
import Button from "../../../components/Button"
import{useNavigate} from "react-router-dom"


const Authority2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.content3}>
                <MyText text="권한 넘기기" />
            </div>
                <div className={classes.content2}>
                    <PersonInfo name="clohee" />
                </div>
            <Button 
                onClick={()=>{navigate("/Main/authority2")}}
                btn={classes.btn} 
                title="권한 넘기기"/>
        </div>
    );
}

export default Authority2;

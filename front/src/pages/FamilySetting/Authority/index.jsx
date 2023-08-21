import MyText from "../../../components/MyText";
import classes from "../../Exit/SetUp/Setting/Setting.module.css";
import PersonInfo from "../../../components/PersonInfo";
import Button from "../../../components/Button"
import{useNavigate} from "react-router-dom"
import { useState } from "react";


const Authority = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handlePersonInfoClick = () => {
        setIsChecked(!isChecked);
    };

    const handleButtonClick = () => {
        navigate();
    }

    return (
        <div>
            <div className={classes.content5}>
                <MyText text="권한 넘기기" />
                <div className={classes.marginBetween} />
                <PersonInfo name="clohee" isChecked={isChecked} onCheckIconClick={handlePersonInfoClick}/>
            </div>
            <Button 
                onClick={handleButtonClick}
                btn={isChecked ? `${classes.btn2} ${classes.blueBtn}` : classes.btn2} // 남색 버튼 클래스 추가
                title="권한 넘기기"/>
        </div>
    );
}

export default Authority;
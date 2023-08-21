import MyText from "../../../../components/MyText";
import classes from "./Setting.module.css";
import PersonInfo from "../../../../components/PersonInfo";
import Button from "../../../../components/Button";

import{useNavigate} from "react-router-dom"
import { useState } from "react";

const Setting = () => {
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
                <MyText text="탈퇴시킬 멤버를 선택해주세요." />
                <div className={classes.marginBetween} />
                <PersonInfo name="clohee" isChecked={isChecked} onCheckIconClick={handlePersonInfoClick}/>
                </div>
            <Button 
                onClick={handleButtonClick}
                btn={isChecked ? `${classes.btn2} ${classes.blueBtn}` : classes.btn2} 
                title="탈퇴시키기"/>
        </div>
    );
}

export default Setting;

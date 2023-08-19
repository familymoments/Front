import Button from "../../../../components/Button";
import MyText from "../../../../components/MyText";
import classes from "../Setting/Setting.module.css";
import PersonInfo from "../../../../components/PersonInfo";

import{useNavigate} from "react-router-dom"


const Setting2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className={classes.content3}>
                <MyText text="탈퇴시킬 멤버를 선택해주세요." />
            </div>
                <div className={classes.content2}>
                    <PersonInfo name="clohee" />
                </div>
            <Button 
                onClick={()=>{navigate()}}
                btn={classes.btn} 
                title="탈퇴시키기"/>
        </div>
    );
}

export default Setting2;

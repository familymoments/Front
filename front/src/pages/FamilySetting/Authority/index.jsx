import MyText from "../../../components/MyText";
import classes from "../../Exit/SetUp/Setting/Setting.module.css";
import PersonInfo from "../../../components/PersonInfo";
import Button from "../../../components/Button"
import{useNavigate} from "react-router-dom"
import { useState } from "react";


const Authority = () => {
    const navigate = useNavigate();
    const [personInfoSelected, setPersonInfoSelected] = useState(false);

    const handlePersonInfoSelect= () => {
        setPersonInfoSelected(true);
    };

    return (
        <div>
            <div className={classes.content3}>
                <MyText text="권한 넘기기" />
            </div>
                <div className={classes.content2}>
                    <PersonInfo name="clohee" onSelect = {handlePersonInfoSelect} />
                </div>
            <Button 
                onClick={()=>{navigate("/Main/authority2")}}
                btn={`${classes.btn2} ${personInfoSelected ? classes.activeButton : classes.disabledButton}`}
        title={personInfoSelected ? "선택 완료" : "권한 넘기기"}
        disabled={!personInfoSelected}
        />
        </div>
    );
}

export default Authority;

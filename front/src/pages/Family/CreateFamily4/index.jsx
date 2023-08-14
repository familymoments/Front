import MyText from "../../../components/MyText";
import InviteLinkBar from "../../../components/InviteLinkBar";
import Button from "../../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import Header from '../../../components/Header';
import styles from "./CreateFamily4.module.css";

import {useNavigate, useLocation} from "react-router-dom"


const CreateFamily4 = () => {
    const navigate = useNavigate();

    const location = useLocation();
    console.log("location.state:", location.state);
    const { selectedAlarm } = location.state;
    console.log("selectedAlarm in CreateFamily4:", selectedAlarm);

    return (
        <div>
            <Header title="가족" />
            <div className={classes.content3}>
            <MyText text="가족 초대 링크" />
            </div>
            <div className={styles.content}>
            <InviteLinkBar />
            </div>
            <Button
                btn={classes.btn2}
                title="초대 링크 복사"
            />
            <Button onClick={()=>{navigate("/landing/createfamily5")}}
                btn={classes.btn} 
                title="다음"
            />
        </div>
    );
}

export default CreateFamily4;
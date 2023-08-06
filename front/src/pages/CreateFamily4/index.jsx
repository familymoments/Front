import MyText from "../../components/MyText";
import InviteLinkBar from "../../components/InviteLinkBar";
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import Header from '../../components/Header';
import styles from "./CreateFamily4.module.css";


const CreateFamily4 = () => {
    return (
        <div>
            <Header title="가족" />
            <div className={styles.content}>
            <MyText text="가족 초대 링크" />
            <InviteLinkBar />
            </div>
            <Button
                btn={classes.btn2}
                title="초대 링크 복사"
            />
    

            <Button 
                location="/landing/createfamily5"
                btn={classes.btn} 
                title="다음"
            />
        </div>
    );
}

export default CreateFamily4;

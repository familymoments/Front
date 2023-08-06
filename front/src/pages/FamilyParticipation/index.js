import MyText from "../../components/MyText";
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import MySearchBar from '../../components/MySearchBar';
import Member from "../../components/Member";
import styles from "../CreateFamily/CreateFamily.module.css";

const FamilyParticipation = () => {
    return (
        <div>
            <MyText text="우리 가족 참여하기" />
            <div className={styles.content}>
            <MySearchBar searchbar={classes.bar} placeholder="초대 링크 입력하기" />
            </div>
            <div className={styles.content2}>
            <Member name="Soyeon's sweety home"/>
            </div>
            <Button btn={classes.btn} location ="/landing/nexttime"/>
        </div>
    );
}

export default FamilyParticipation;

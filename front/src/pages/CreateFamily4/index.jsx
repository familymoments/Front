import { Link } from 'react-router-dom';
import MyText from "../../components/MyText";
import InviteLinkBar from "../../components/InviteLinkBar";
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import Header from '../../components/Header';

const CreateFamily4 = () => {
    return (
        <div>
            <Header title="가족" />
            <MyText text="가족 초대 링크" />
            <InviteLinkBar />
            <Button btn={classes.btn2} title="초대 링크 복사"/>
            <Link to="../landing/createfamily5">
            <Button btn={classes.btn} title="다음"/>
            </Link>
        </div>
    );
}

export default CreateFamily4;

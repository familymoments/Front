import { Link } from 'react-router-dom';
import Button from "../../components/Button";
import CircleButton from "../../components/CircleButton";
import classes from "./NewFamily.module.css";

const NewFamily = () => {
    return (
        <div className={classes.NewFamily}>
            <div className={classes.area}>
                <Link to="../createfamily2">
                <CircleButton title="우리 가족 생성하기" type="pink" layout={classes.pinkCircleBtn} />
                </Link>
                <Link to="../familyparticipation">
                <CircleButton title="우리 가족 참여하기" type="purple" layout={classes.purpleCircleBtn} />
                </Link>
            </div>
            <Button btn={classes.btn} title="다음에 하기"/>
        </div>
    );
};

export default NewFamily;

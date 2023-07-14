import Button from "../components/Button";
import CircleButton from "../components/CircleButton";
import Header from "../components/Header";
import classes from "./NewFamily.module.css";

const NewFamily = () => {
    return (
        <div className={classes.NewFamily}>
            <Header title="title" showIcon={false} />
            <div className={classes.area}>
                <CircleButton title="우리 가족 생성하기" type="pink" />
                <CircleButton title="우리 가족 참여하기" type="purple" />
                <Button btn={classes.btn} title="버튼이다."/>
            </div>
            <div className={classes.empty}></div>
        </div>
    );
};

export default NewFamily;

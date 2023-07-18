import Button from "../../components/Button";
import CircleButton from "../../components/CircleButton";
import Header from "../../components/Header";
import classes from "./NewFamily.module.css";

const NewFamily = () => {
    return (
        <div className={classes.NewFamily}>
            <Header title="가족 정하기" showIcon={false} />
            <div className={classes.area}>
                <CircleButton title="우리 가족 생성하기" type="pink" layout={classes.pinkCircleBtn} />
                <CircleButton title="우리 가족 참여하기" type="purple" layout={classes.purpleCircleBtn} />
                <Button btn={classes.btn} title="다음에 하기"/>
            </div>
        </div>
    );
};

export default NewFamily;

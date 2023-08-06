import MyText from "../../components/MyText";
import AlarmPeriod from "../../components/AlarmPeriod";
import Button from "../../components/Button";
import style from './CreateFamily3.module.css';
import classes from "../CreateFamily/CreateFamily.module.css";
import Header from '../../components/Header';

const CreateFamily3 = () => {
    return (
        <div>
            <Header title="가족" />
            <div className={style.content}>
                <MyText text="우리 가족 생성하기" />
                <AlarmPeriod />
            </div>

            <Button 
            location ="/landing/createfamily4"
            btn={classes.btn} 
            title="가족 생성하기"/>
        </div>
        );
    }

export default CreateFamily3;
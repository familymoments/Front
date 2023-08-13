import MyText from "../../../components/MyText";
import AlarmPeriod from "../../../components/AlarmPeriod";
import Button from "../../../components/Button";
import style from './CreateFamily3.module.css';
import classes from "../CreateFamily/CreateFamily.module.css";
import Header from '../../../components/Header';

import{useNavigate, useLocation} from "react-router-dom"

const CreateFamily3 = () => {
    const location = useLocation();
    console.log("location.state:", location.state);
    const { selectedFamilyName } = location.state;
    console.log("selectedFamilyName in CreateFamily3:", selectedFamilyName);

    const navigate = useNavigate();
    
    return (
        <div>
            <Header title="가족" />
            <div className={classes.content3}>
                <MyText text="우리 가족 생성하기" />
                </div>
                <div className={style.content}>
                <AlarmPeriod />
            </div>
            <Button 
            onClick={()=>{navigate("/landing/createfamily4")}}
            btn={classes.btn} 
            title="가족 생성하기"/>
        </div>
        );
    }

    export default CreateFamily3;
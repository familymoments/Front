import MyText from "../../../components/MyText";
import AlarmPeriod from "../../../components/AlarmPeriod";
import Button from "../../../components/Button";
import style from './CreateFamily3.module.css';
import classes from "../CreateFamily/CreateFamily.module.css";
import Header from '../../../components/Header';

import{useNavigate, useLocation} from "react-router-dom"
import { useState } from "react";

const CreateFamily3 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    console.log("location.state:", location.state);
    // console.log("selectedFamilyName in CreateFamily3:", selectedFamilyName);

    const { selectedFamilyName, selectedImage } = location.state;
    const [selectedAlarm, setselectedAlarm] = useState();

    const handleNextClick = async () => {
        await navigate("/landing/createfamily4", {
            state: {
                selectedAlarm: selectedAlarm, // 선택한 알람 주기 상태를 다음 경로로 전달
                selectedImage: selectedImage, // 선택한 사진 전달
                selectedFamilyName: selectedFamilyName,             
            },
        });
    };
    
    return (
        <div style={{width:"100%"}}>
            <Header title="가족" />
            <div className={classes.content3}>
                <MyText text="우리 가족 생성하기" />
                </div>
                <div className={style.content}>
                <AlarmPeriod 
                    selectedAlarm={selectedAlarm}
                    onSelect={setselectedAlarm}
                />
            </div>
            <Button 
            onClick={handleNextClick}
            btn={classes.btn} 
            title="다음 (2/3)"/>
        </div>
        );
    }

    export default CreateFamily3;
import MyText from "../../../components/MyText";
import AlarmPeriod from "../../../components/AlarmPeriod";
import Button from "../../../components/Button";
import style from '../../Family/CreateFamily3/CreateFamily3.module.css';
import classes from "../../Family/CreateFamily/CreateFamily.module.css";

import { useState } from "react";

const CreateFamily3 = () => {
    const [selectedAlarm, setselectedAlarm] = useState();

    // const handleNextClick = async () => {
    //     await navigate("/landing/createfamily4", {
    //         state: {
    //             selectedAlarm: selectedAlarm, // 선택한 알람 주기 상태를 다음 경로로 전달
    //             selectedImage: selectedImage, // 선택한 사진 전달
    //             selectedFamilyName: selectedFamilyName,             
    //         },
    //     });
    // };
    
    return (
        <div>
            <div className={classes.content3}>
                <MyText text="업로드 주기 변경" />
                </div>
                <div className={style.content}>
                <AlarmPeriod 
                    selectedAlarm={selectedAlarm}
                    onSelect={setselectedAlarm}
                />
            </div>
            <Button 
            btn={classes.btn} 
            title="완료"/>
        </div>
        );
    }

    export default CreateFamily3;
import MyText from "../../../components/MyText";
import AlarmPeriod from "../../../components/AlarmPeriod";
import Button from "../../../components/Button";
// import style from '../../Family/CreateFamily3/CreateFamily3.module.css';
// import classes from "../../Family/CreateFamily/CreateFamily.module.css";
import classes from "./FamilySetting2.module.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { header } from "../../../atom";

const CreateFamily3 = () => {
    const SERVER = process.env.REACT_APP_SERVER_URL;
    const [headers, setHeaders] = useRecoilState(header);

    const [selectedAlarm, setselectedAlarm] = useState();
    const [code, setCode] = useState(0);
    const [message, setMessage] = useState("");

    // const handleNextClick = async () => {
    //     await navigate("/landing/createfamily4", {
    //         state: {
    //             selectedAlarm: selectedAlarm, // 선택한 알람 주기 상태를 다음 경로로 전달
    //             selectedImage: selectedImage, // 선택한 사진 전달
    //             selectedFamilyName: selectedFamilyName,
    //         },
    //     });
    // };

    useEffect(() => {
        console.log(selectedAlarm);
    }, [selectedAlarm]);

    const updateCycle = async () => {
        const response = await axios.patch(
            `${SERVER}/families/5?uploadCycle=${selectedAlarm}`,
            null,
            { headers }
        );

        console.log(response.data)
        setCode(response.data.code)
        setMessage(response.data.message)
    };

    const cycleHandler = () => {
        updateCycle();

        if (code === 200)
            alert(message)
        if (code === 400)
            alert(message)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.subWrapper}>
                <div className={classes.content3}>
                    <MyText text="업로드 주기 변경" />
                </div>
                <div className={classes.content}>
                    <AlarmPeriod
                        selectedAlarm={selectedAlarm}
                        onSelect={setselectedAlarm}
                    />
                </div>
                <Button btn={classes.btn} title="완료" onClick={cycleHandler} />
            </div>
        </div>
    );
};

export default CreateFamily3;

import React from 'react';
import MyText from "../../components/MyText";
import AlarmPeriod from "../../components/AlarmPeriod";
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";

const CreateFamily3 = () => {
    return (
        <div className={classes.createFamily3}>
            <MyText text="우리 가족 생성하기" />
            <AlarmPeriod />
            <Button btn={classes.btn} title="가족 생성하기"/>
        </div>
        );
    }

export default CreateFamily3;
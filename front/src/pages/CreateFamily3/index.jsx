import React from 'react';
import MyText from "../../components/MyText";
import AlarmPeriod from "../../components/AlarmPeriod";
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import Header from '../../components/Header';

const CreateFamily3 = () => {
    return (
        <div className={classes.createFamily3}>
            <Header title="가족" />
            <MyText text="우리 가족 생성하기" />
            <AlarmPeriod />
            <Button btn={classes.btn} title="가족 생성하기"/>
        </div>
        );
    }

export default CreateFamily3;
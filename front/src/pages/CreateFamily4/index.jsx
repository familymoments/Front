import React from 'react';
import MyText from "../../components/MyText";
import InviteLinkBar from "../../components/InviteLinkBar";
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";

const CreateFamily4 = () => {
    return (
        <div className={classes.createFamily4}>
            <MyText text="가족 초대 링크" />
            <InviteLinkBar />
            <Button btn={classes.btn2} title="초대 링크 복사"/>
            <Button btn={classes.btn} title="다음"/>
        </div>
    );
}

export default CreateFamily4;

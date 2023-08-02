import React from 'react';
import MyText from "../../components/MyText";
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";
import MySearchBar from '../../components/MySearchBar';
import Member from "../../components/Member";

const FamilyParticipation = () => {
    return (
        <div className={classes.familyParticipation}>
            <MyText text="우리 가족 참여하기" />
            <MySearchBar placeholder="초대 링크 입력하기" />
            <Member name="Soyeon's sweety home"/>
            <Button btn={classes.btn}/>
        </div>
    );
}

export default FamilyParticipation;

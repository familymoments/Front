import React from 'react';
import MyText from "../../components/MyText";
import Button from "../../components/Button";
import classes from "./CreateFamily.module.css";
import MySearchBar from "../../components/MySearchBar"
import PersonInfo from "../../components/PersonInfo"

const CreateFamily = () => {
    return (
        <div className={classes.createFamily}>
            <MyText text="우리 가족 생성하기" />
            <MySearchBar placeholder="ID 검색" />
            <PersonInfo name="clohee" />
            <Button btn={classes.btn} title="다음 (1/3)"/>
        </div>
    );
}

export default CreateFamily;

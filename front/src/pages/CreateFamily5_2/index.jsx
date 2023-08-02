import React from 'react';
import Union from "../../components/Union";
import Footer from '../../components/Footer';
import mediaImage from "../../assets/media_image.jpg";
import pStyle from "./CreateFamily5_2.module.css";
import Button from "../../components/Button";
import classes from "../CreateFamily/CreateFamily.module.css";

const CreateFamily5_2 = () => {
    return (
        <div>
            <Union bubble={pStyle.bubble} message="가족 생성ㆍ참여하려면 여기를 클릭해주세요"/>
            <img src = {mediaImage} alt="media image" className = {pStyle.imageStyle}/>
            <p className={pStyle.pText}>순간을 공유하기 전에<br />가족 생성 혹은 가족 참여를 해주세요!</p>
            <Footer />
            <Button btn={classes.btn} title="지금 시작하기"/>
        </div>
    );
}

export default CreateFamily5_2;

import React from 'react';
import Union from "../../components/Union";
import Footer from '../../components/Footer';
import mediaImage from "../../assets/media_image.jpg";
import pStyle from "./CreateFamily5.module.css";
import HelloText2 from '../../components/HelloText2';

const CreateFamily5 = () => {
    return (
        <div>
            <Union bubble={pStyle.bubble} message="+ 버튼을 눌러 가족에게 순간을 공유해보세요"/>
            <HelloText2 user="딸내미" customText="다른 가족들이 참여하기를 기다리는 중입니다." />
            <img src={mediaImage} alt="media image" className={pStyle.imageStyle}/>
            <p className={pStyle.pText}>아직 공유한 순간이 없습니다.<br />지금 바로 순간을 공유해보세요!</p>
            <Footer />
        </div>
    );
}

export default CreateFamily5;

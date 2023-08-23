import React from 'react';
import Union from "../../../components/Union";
import Footer from '../../../components/Footer';
import mediaImage from "../../../assets/media_image.jpg";
import pStyle from "./CreateFamily5.module.css";
import HelloText2 from '../../../components/HelloText2';
import { useLocation } from "react-router-dom";

const CreateFamily5 = () => {
    const location = useLocation();
    const selectedUserId = location.state?.selectedUserId;
    const selectedImage = location.state?.selectedImage;

    return (
        <div className={pStyle.container}>
            <div className={pStyle.text}>
            <HelloText2 user={selectedUserId} customText="지금 바로 Family Moments를 시작해보세요!" />
            </div>
            <div className={pStyle.content}>
                <img src={mediaImage} alt="media image" className={pStyle.imageStyle}/>
                <p className={pStyle.pText}>아직 공유한 순간이 없습니다.<br />지금 바로 순간을 공유해보세요!</p>
            </div>
            <div className={pStyle.union}>
            <Union message="+ 버튼을 눌러 가족에게 순간을 공유해보세요"/>
            </div>
            <Footer />
        </div>
    );
}

export default CreateFamily5;

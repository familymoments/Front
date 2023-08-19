import React from 'react';
import Union from "../../../components/Union";
import Footer from '../../../components/Footer';
import mediaImage from "../../../assets/media_image.jpg";
import pStyle from "./CreateFamily5.module.css";
import HelloText2 from '../../../components/HelloText2';

const CreateFamily5 = () => {
    return (
        <div className={pStyle.wrapper}>
            <div className={pStyle.content}>
                <img src={mediaImage} alt="media image" className={pStyle.imageStyle}/>
                <p className={pStyle.pText}>아직 공유한 순간이 없습니다.<br />지금 바로 순간을 공유해보세요!</p>
            </div>
            <Union/>
            
        </div>
    );
}

export default CreateFamily5;

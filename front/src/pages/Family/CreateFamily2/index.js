import React, { useState } from "react";
import MakeFamilyBar from "../../../components/MakeFamilyBar";
import Button from "../../../components/Button";
import FileUploadButton from "../../../components/FileUpload";
import classes from "../CreateFamily/CreateFamily.module.css";
import style from './CreateFamily2.module.css';
import Header from "../../../components/Header";
import MyText from "../../../components/MyText";
import FamilySelect from "../../../components/FamilySelect";

import { useNavigate } from "react-router-dom";

const CreateFamily2 = () => {
    const navigate = useNavigate();
    const [selectedFamilyName, setSelectedFamilyName] = useState();
    const [selectedImage, setSelectedImage] = useState();

    const handleNextClick = async () => {
        await navigate("/landing/createfamily3", {
            state: {
                selectedFamilyName: selectedFamilyName,
                selectedImage: selectedImage,
            },
        });
    };

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <Header title="가족" />
            <div className={classes.content3}>
                <MyText text="우리 가족 생성하기" />
            </div>
            <div className={style.content}>
                <FamilySelect
                    buttonText="가족 이름 정하기"
                    customClass={style.familySelect}
                    onSelect={setSelectedFamilyName}
                />
                <MakeFamilyBar
                    selectedFamilyName={selectedFamilyName}
                    onSelect={setSelectedFamilyName}
                />
                <FamilySelect
                    buttonText="가족 이미지 선택"
                    customClass={style.selectImage}
                    onSelect={handleImageSelect} // 이미지 선택 시 호출되는 콜백
                />
                <FileUploadButton onSelectImage={handleImageSelect} />
                <div className="imgUpload"></div>
            </div>
            <Button onClick={handleNextClick} btn={classes.btn} title="다음 (1/3)" />
        </div>
    );
}

export default CreateFamily2;

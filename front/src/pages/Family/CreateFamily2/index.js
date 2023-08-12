import React, { useState } from "react";
import MakeFamilyBar from "../../../components/MakeFamilyBar";
import Button from "../../../components/Button";
import FileUploadButton from "../../../components/FileUpload";
import classes from "../CreateFamily/CreateFamily.module.css";
import styles from "../../../components/FamilySelect/SelectImage.module.css";
import style from './CreateFamily2.module.css';
import Header from "../../../components/Header";
import MyText from "../../../components/MyText";
import FamilySelect from "../../../components/FamilySelect";

import { useNavigate } from "react-router-dom";


const CreateFamily2 = () => {
    const navigate = useNavigate();
    const [selectedFamilyName, setSelectedFamilyName] = useState(""); // 가족 이름 상태 추가

    const handleNextClick = async () => {
        await navigate("/landing/createfamily3", { 
            state: {
                selectedFamilyName: selectedFamilyName 
            } 
        });
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
                    customClass={styles.familySelect}
                    onSelect={setSelectedFamilyName} // 가족 이름 선택 시 상태 업데이트
                />
                <MakeFamilyBar selectedFamilyName={selectedFamilyName} />
                <FamilySelect 
                    buttonText="가족 이미지 선택" 
                    customClass={style.SelectImage} 
                />
                <FileUploadButton />
                <div className="imgUpload"></div>
            </div>
            <Button onClick={handleNextClick} btn={classes.btn} title="다음 (2/3)" />
        </div>
    );
}

export default CreateFamily2;

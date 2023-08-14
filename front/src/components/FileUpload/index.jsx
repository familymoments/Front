import React, { useState, useRef } from "react";
import imgUpload from "../../assets/Group 30.png";
import defaultImg from "../../assets/default.png";
import styles from "./FileUpload.module.css";
import {profileImg} from "../../atom";
import { useRecoilState } from 'recoil';

const FileUploadButton = ({onselectImage}) => {
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileimg, setprofileimg]=useRecoilState(profileImg);

  const handleOptionChange = (e) => {
    if (e.target.value === "gallery") {
      openFileInput();
    } else if (e.target.value === "default") { // 기본 이미지 선택 시
      setSelectedImage(defaultImg); // defaultImg로 이미지 설정
      setShowOptions(false);
    }
  };

  const openFileInput = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', async (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        setShowOptions(false);
        setSelectedImage(URL.createObjectURL(selectedFile)); // 선택한 이미지 설정
        onselectImage(URL.createObjectURL(selectedFile));
        //const imageUrl = URL.createObjectURL(selectedFile);
        // setSelectedImage(imageUrl);
        setprofileimg(selectedFile);
      }
    });

    fileInput.click();
  };

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const selectBoxClassName = `${styles.selectBox} ${showOptions ? styles.selectOpen : ""}`;

  return (
    <div>
      <button className={styles.uploadButton} onClick={handleButtonClick}>
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className={styles.selectedImage}/> // 선택한 이미지 보여주기
          ) : (
            <img src={imgUpload} alt="Upload" />
          )}
      </button>
      {showOptions && (
        <div ref={selectRef} className={selectBoxClassName}>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option style={{ display: "none" }} value="">
              사진 선택
            </option>
            <option value="gallery">갤러리에서 선택</option>
            <option value="default">기본 이미지로 하기</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default FileUploadButton;
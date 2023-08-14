import React, { useState, useRef } from "react";
import styles from "./FileUpload.module.css";
import imgUpload from "../../assets/Group 30.png";

import {profileImg} from "../../atom";
import { useRecoilState } from 'recoil';

const FileUploadButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  //상태관리
  const [profileimg,setprofileimg]=useRecoilState(profileImg);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedImage(null); // Reset selected image when option changes

    if (event.target.value === "gallery") {
      openFileInput(); // Open file input dialog if "갤러리에서 선택" is chosen
    }
  };

  const openFileInput = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', async (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        setSelectedImage(imageUrl);
        console.log(selectedFile,"dddddd");
        setprofileimg(selectedFile);
      }
    });

    fileInput.click();
  };

  const handleOutsideClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const selectBoxClassName = `${styles.selectBox} ${showOptions ? styles.selectOpen : ""}`;

  return (
    <div>
      <button className={styles.uploadButton} onClick={handleButtonClick}>
        <img src={imgUpload} alt="Upload" />
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
      {selectedImage && (
        <div className={styles.background} style={{ backgroundImage: `url(${selectedImage})` }} />
      )}
    </div>
  );
};

export default FileUploadButton;

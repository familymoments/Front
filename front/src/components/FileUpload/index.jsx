import React, { useState, useRef, useEffect } from "react";
import styles from "./FileUpload.module.css";
import imgUpload from "../../assets/Group 30.png";

const FileUploadButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const selectRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    if (showOptions) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showOptions]);

  // selectOpen 클래스를 showOptions 상태에 따라 동적으로 추가/제거합니다.
  const selectBoxClassName = `${styles.selectBox} ${showOptions ? styles.selectOpen : ""}`;

  return (
    <div>
      <button className={styles.uploadButton} onClick={handleButtonClick}>
        <img src={imgUpload} alt="Upload" />
      </button>
      {showOptions && (
        <div ref={selectRef} className={selectBoxClassName}>
          <select>
            <option style={{ display: "none" }} value="">
              사진 선택
            </option>
            <option value="option1">갤러리에서 선택</option>
            <option value="option2">기본이미지로 하기</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default FileUploadButton;

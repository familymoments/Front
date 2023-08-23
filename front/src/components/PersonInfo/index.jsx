import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import styles from "./PersonInfo.module.css";

const PersonInfo = ({ name, image, onCheckIconClick, isChecked }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const avatarStyle = {
    width: "38px",   
    height: "38px",
    borderRadius: "50%",
  };

  const personInfoStyle = {
    backgroundColor: isHovered ? "#ccc" : "transparent",
  };


  return (
    <div 
        className={styles.personInfo}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={personInfoStyle}
      >
      <div className={styles.avatar}>
        {image ? (
          <img src={image} alt={`${name}의 프로필`} style={avatarStyle} />
        ) : (
          <FaUser style={avatarStyle} />
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.check}>
        {isChecked ? (
          <AiFillCheckCircle
            className={styles.checkIconFilled}
            onClick={onCheckIconClick}
            size={30}
          />
        ) : (
          <BsCircle
            className={styles.checkIcon}
            onClick={onCheckIconClick}
            size={30}
          />
        )}
      </div>
    </div>
  );
};

export default PersonInfo;

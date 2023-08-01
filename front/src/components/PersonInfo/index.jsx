import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import styles from "./PersonInfo.module.css";

const PersonInfo = ({ name }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.personInfo}>
      <div className={styles.avatar}>
        <FaUser size={38} color="#ccc" />
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
      </div>
      <div className={styles.check}>
        {checked ? (
          < AiFillCheckCircle className={styles.checkIconFilled} onClick={handleClick} size={30}/>
        ) : (
          <BsCircle className={styles.checkIcon} onClick={handleClick} size={30}/>
        )}
      </div>
    </div>
  );
};

export default PersonInfo;

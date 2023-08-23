import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import styles from "./Member.module.css";

const Member = ({ name, image }) => {
    const [checked, setChecked] = useState(false);

    const handleClick = () => {
    setChecked(!checked);
};

const avatarStyle = {
    width: "38px",   
    height: "38px",
    borderRadius: "50%",
};

return (
    <div className={styles.member}>
    <div className={styles.avatar}>
        {image ? (
            <img src={image} alt={`${name}의 프로필`} style={avatarStyle} />
        ) : (
        <FaUser size={38} color="#ccc" style={avatarStyle} />
        )}
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

export default Member;

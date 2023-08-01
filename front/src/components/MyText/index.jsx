import React from "react";
import styles from "./MyText.module.css";

const MyText = ({text}) => {
    return (
    <div className={styles.myText}>
        {text}
    </div>
    );
};

export default MyText;

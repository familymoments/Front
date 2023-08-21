import React from "react";
import styles from "./Union.module.css";

const Union = ({message}) => {
    return (
        <div className={styles.wrapper}>        
            <div className={styles.bubble}>
                {message}
            </div>
        </div>

    );
};

export default Union;

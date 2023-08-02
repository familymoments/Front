import React from "react";
import styles from "./Union.module.css";

const Union = (props) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.bubble} ${props.bubble}`}>
                <div className={styles.text}>
                    {props.message}
                </div>
            </div>
        </div>
    );
};

export default Union;

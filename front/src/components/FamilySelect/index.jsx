import React from "react";
import styles from "./FamilySelect.module.css";

const FamilySelect = ({ buttonText, customClass }) => {
    return (
    <div className={`${styles.familySelect} ${customClass}`}>
        {buttonText}
    </div>
    );
};

export default FamilySelect;

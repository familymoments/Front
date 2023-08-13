import React from "react";

const FamilySelect = ({ buttonText, customClass }) => {
    return (
    <div className={`${customClass}`}>
        {buttonText}
    </div>
    );
};

export default FamilySelect;
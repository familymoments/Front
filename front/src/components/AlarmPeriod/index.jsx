import React, { useState } from "react";
import styles from "./AlarmPeriod.module.css";

const AlarmPeriod = ({onSelect}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSelect(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className={styles.selectBox}>
        <select value={searchTerm} onChange={handleChange}>
            <option style={{ display: "none" }} value="">
            알람 주기 설정
            </option>
            <option value="op1">1일</option>
            <option value="op2">3일</option>
            <option value="op3">5일</option>
            <option value="op4">일주일</option>
            <option value="op5">2주일</option>
            <option value="op6">한달</option>
            <option value="op7">추가 설정 하지 않음</option>
        </select>
        </div>
    </form>
    </div>
    );
};

export default AlarmPeriod;

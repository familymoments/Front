import React, { useState } from "react";
import styles from "./InviteLinkBar.module.css";

const InviteLinkBar = ({ text, onSearchTermChange, placeholder, style }) => {
  const [searchTerm, setSearchTerm] = useState(""); // searchTerm 상태 추가

  const handleChange = (event) => {
    const newTerm = event.target.value;
    setSearchTerm(newTerm); // searchTerm 상태 업데이트
    onSearchTermChange(newTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.linkBar}>
      <div className={styles.linkcontainer}>
        <div className={styles.linkText}>
          <input
            type={text}
            value={searchTerm}
            onChange={handleChange}
            className={styles.searchInput}
            placeholder={placeholder}
            style={style}
          />
        </div>
      </div>
    </form>
  );
};

export default InviteLinkBar;

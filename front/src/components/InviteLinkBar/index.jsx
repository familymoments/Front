import React, { useState } from "react";
import styles from "./InviteLinkBar.module.css";

const InviteLinkBar = ({ placeholder, onSearchTermChange, searchTerm, style }) => {
  const handleChange = (event) => {
    onSearchTermChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.linkBar}>
      <div className={styles.linkcontainer}>
        <div className={styles.linkText}>
          <input
            type="text"
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

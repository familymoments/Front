import React, { useState } from "react";
import styles from "./InviteLinkBar.module.css";

const InviteLinkBar = () => {
    const [searchTerm, setLinkTerm] = useState("http://www.dgjkdlkgzsldkfjgoqkdfnlmf");

    const handleChange = (event) => {
        setLinkTerm(event.target.value);
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
          />
        </div>
      </div>
      </form>
  );
};

export default InviteLinkBar;

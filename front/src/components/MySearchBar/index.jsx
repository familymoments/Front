import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./MySearchBar.module.css";

const MySearchBar = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />
        <div className={styles.searchText}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder={placeholder}
            className={styles.searchInput}
          />
        </div>
      </div>
    </form>
  );
};

export default MySearchBar;

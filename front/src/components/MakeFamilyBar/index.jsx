import React, { useState } from "react";
import styles from "./MakeFamilyBar.module.css";

const MakeFamilyBar = ({onSelect}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSelect(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <div className={styles.searchContainer}>
        <div className={styles.searchText}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="| 가족의 이름을 만들어주세요! (20자 이내)"
            className={styles.searchInput}
          />
        </div>
      </div>
    </form>
  );
};

export default MakeFamilyBar;
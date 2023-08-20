import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./MySearchBar.module.css";

const MySearchBar = (props) => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  // return (
  //   <form onSubmit={handleSubmit} className={styles.searchBar}>
  //     <div className={styles.searchContainer}>
  //       <FiSearch className={styles.searchIcon} />
  //       <div className={styles.searchText}>
  //         <input
  //           type="text"
  //           value={props.value}
  //           onChange={props.onChange}
  //           placeholder={props.placeholder}
  //           className={styles.searchInput}
  //         />
  //       </div>
  //     </div>
  //   </form>
  // );

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(); // 부모 컴포넌트의 handleSearchSubmit 함수 호출
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <div className={styles.searchContainer}>
        <FiSearch className={styles.searchIcon} />
        <div className={styles.searchText}>
          <input
            type="text"
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={styles.searchInput}
          />
        </div>
      </div>
    </form>
  );
};

export default MySearchBar;
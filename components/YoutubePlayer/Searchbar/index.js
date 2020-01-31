import React from "react";
import { PropTypes } from "prop-types";
import styles from "./Searchbar.module.css";

const Searchbar = ({ handleOnChange, handleSearch, searchTerm = "" }) => {
  return (
    <input
      className={styles.searchbar}
      type="text"
      onChange={handleOnChange}
      onKeyDown={handleSearch}
      placeholder="Enter a url..."
      value={searchTerm}
    />
  );
};

Searchbar.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
};

export default Searchbar;

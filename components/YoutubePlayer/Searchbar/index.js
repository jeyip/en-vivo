import React from "react";
import { PropTypes } from "prop-types";
import styles from "./Searchbar.module.css";

const Searchbar = ({ handleSearch }) => {
  return (
    <input
      className={styles.searchbar}
      type="text"
      onKeyUp={handleSearch}
      placeholder="Enter a location..."
    ></input>
  );
};

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Searchbar;

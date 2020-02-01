import React, { useState } from "react";
import cx from "classnames";
import { PropTypes } from "prop-types";
import styles from "./Searchbar.module.css";

const Searchbar = ({ handleOnChange, handleSearch, searchTerm = "" }) => {
  const [isFocused, setFocus] = useState(false);

  return (
    <input
      className={cx(styles.searchbar, { [styles.focus]: isFocused })}
      onBlur={() => setFocus(false)}
      onChange={handleOnChange}
      onFocus={() => setFocus(true)}
      onKeyDown={handleSearch}
      placeholder="Enter in a Youtube url..."
      type="text"
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

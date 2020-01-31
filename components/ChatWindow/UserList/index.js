import React from "react";
import PropTypes from "prop-types";
import styles from "./UserList.module.css";

const UserList = ({ userList = [] }) => {
  return (
    <div className={styles.list}>
      <span>Users Connected: </span>
      {userList.map((user, index) => {
        const name = Object.values(user)[0];

        return (
          <span key={`${user}-${index}`}>
            {name}
            <span>, </span>
          </span>
        );
      })}
    </div>
  );
};

UserList.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.object)
};

export default UserList;

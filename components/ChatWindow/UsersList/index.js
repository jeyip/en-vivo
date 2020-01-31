import React from "react";
import PropTypes from "prop-types";
import styles from "./UsersList.module.css";

function UsersList({ userList = [] }) {
  let userListRendered = [];
  let counter = 0;

  // TODO: Refactor
  for (let key in userList) {
    counter++;
    userListRendered.push(
      <span key={counter}>
        {userList[key]}
        <span>, </span>
      </span>
    );
  }

  return (
    <div className={styles.list}>
      <span>Users Connected: </span>
      {userListRendered}
    </div>
  );
}

UsersList.propTypes = {
  userList: PropTypes.object
};

export default UsersList;

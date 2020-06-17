import React from 'react';
import Proptypes, { exact } from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={styles.item}>
        <span className={styles[isOnline]}></span>
        <img src={avatar} alt={name} className={styles.avatar}></img>
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: Proptypes.arrayOf(
    exact({
      avatar: Proptypes.string,
      name: Proptypes.string.isRequired,
      isOnline: Proptypes.bool.isRequired,
      id: Proptypes.number.isRequired,
    }),
  ),
};

export default FriendList;

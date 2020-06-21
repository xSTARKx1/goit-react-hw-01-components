import React from 'react';
import Proptypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <span className={styles[isOnline]}></span>
    <img src={avatar} alt={name} className={styles.avatar}></img>
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.propTypes = {
  avatar: Proptypes.string,
  name: Proptypes.string.isRequired,
  isOnline: Proptypes.bool.isRequired,
};

export default FriendListItem;

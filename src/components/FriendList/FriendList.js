import React from 'react';
import Proptypes, { shape } from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={styles.item}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: Proptypes.arrayOf(
    shape({
      id: Proptypes.number.isRequired,
    }).isRequired,
  ),
};

export default FriendList;

import React from 'react';
import Proptypes from 'prop-types';
import defaultImage from '../default.jpg';
import styles from './Profile.module.css';

const Profile = ({ url, name, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={url} alt={name} className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  url: defaultImage,
};

Profile.propTypes = {
  url: Proptypes.string,
  name: Proptypes.string.isRequired,
  tag: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  stats: Proptypes.exact({
    followers: Proptypes.number.isRequired,
    views: Proptypes.number.isRequired,
    likes: Proptypes.number.isRequired,
  }),
};

export default Profile;

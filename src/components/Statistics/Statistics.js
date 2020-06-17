import React from 'react';
import Proptypes, { exact } from 'prop-types';
import Profile from '../Profile/Profile';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(({ label, percentage, id }) => (
        <li key={id} className={styles.item}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Profile.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: Proptypes.string,
  stats: Proptypes.arrayOf(
    exact({
      label: Proptypes.string.isRequired,
      percentage: Proptypes.number.isRequired,
      id: Proptypes.string.isRequired,
    }),
  ),
};

export default Statistics;

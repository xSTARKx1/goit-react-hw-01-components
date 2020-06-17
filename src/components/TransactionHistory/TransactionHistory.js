import React from 'react';
import Proptypes, { exact } from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: Proptypes.arrayOf(
    exact({
      id: Proptypes.string.isRequired,
      type: Proptypes.string.isRequired,
      amount: Proptypes.string.isRequired,
      currency: Proptypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;

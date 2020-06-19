import React from 'react';
import Proptypes, { shape } from 'prop-types';
import TableHeader from './TableHeader';
import ListOfTransactions from './ListOfTransactions';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <TableHeader />
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <ListOfTransactions type={type} amount={amount} currency={currency} />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: Proptypes.arrayOf(
    shape({
      id: Proptypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;

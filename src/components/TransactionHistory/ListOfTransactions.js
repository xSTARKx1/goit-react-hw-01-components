import React from 'react';
import Proptypes from 'prop-types';

const ItemOfListTransactions = ({ type, amount, currency }) => (
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

ItemOfListTransactions.propTypes = {
  type: Proptypes.string.isRequired,
  amount: Proptypes.string.isRequired,
  currency: Proptypes.string.isRequired,
};

export default ItemOfListTransactions;

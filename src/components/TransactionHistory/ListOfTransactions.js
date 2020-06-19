import React from 'react';
import Proptypes, { shape } from 'prop-types';

const ListOfTransactions = ({ type, amount, currency }) => (
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

ListOfTransactions.propTypes = {
  item: Proptypes.arrayOf(
    shape({
      type: Proptypes.string.isRequired,
      amount: Proptypes.string.isRequired,
      currency: Proptypes.string.isRequired,
    }).isRequired,
  ),
};

export default ListOfTransactions;

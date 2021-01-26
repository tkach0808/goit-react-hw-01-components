import React from 'react';
import PropTypes from 'prop-types';
import Tbody from './Tbody/Tbody';
import s from './Transactionhistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead>
        <tr>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>
      <Tbody transaction={items} />
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
export default TransactionHistory;

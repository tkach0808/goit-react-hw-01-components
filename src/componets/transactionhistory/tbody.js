import React from 'react';
import PropTypes from 'prop-types';
import s from './Transactionhistory.module.css';

const tbodyTr = ({ id, type, amount, currency }) => {
  return (
    <tr className={s.data} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
const Tbody = ({ transaction }) => {
  return <tbody>{transaction.map(tbodyTr)}</tbody>;
};

Tbody.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Tbody;

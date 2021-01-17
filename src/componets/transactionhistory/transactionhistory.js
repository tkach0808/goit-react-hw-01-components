import React from 'react';
import Tbody from './Tbody';
import s from './Transactionhistory.module.css';

function TransactionHistory({ items }) {
  console.log(items);
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

export default TransactionHistory;

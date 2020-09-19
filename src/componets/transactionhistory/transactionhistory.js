import React from 'react';
import styles from './transactionhistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styles.transaction}>
      <thead>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr className={styles.data} key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

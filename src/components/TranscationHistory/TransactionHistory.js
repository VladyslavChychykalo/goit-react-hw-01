import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>Type</th>
        <th className={styles.th}>Amount</th>
        <th className={styles.th}>Currency</th>
      </tr>
    </thead>
    <tbody className={styles.tbody}>
      {items.map(el => (
        <tr key={el.id} className={styles.tr}>
          <td className={[styles.td, styles.capitalize].join(' ')}>
            {el.type}
          </td>
          <td className={[styles.td, styles.capitalize].join(' ')}>
            {el.amount}
          </td>
          <td className={[styles.td, styles.capitalize].join(' ')}>
            {el.currency}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;

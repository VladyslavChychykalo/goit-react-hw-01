import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
  <section className={styles.statsWrapper}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.list}>
      {stats.map(el => (
        <li
          key={el.id}
          className={styles.item}
          style={{
            backgroundColor: `#${(Math.random() * 1000000).toFixed()}`,
          }}
        >
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default Stats;

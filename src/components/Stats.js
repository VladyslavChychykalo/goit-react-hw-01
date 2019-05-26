import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ title, stats }) => (
  <section className="stats-section">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map(el => (
        <li key={el.id} className="item">
          <span className="label">{el.label}</span>
          <span className="percentage">{el.percentage}%</span>
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
  ),
};
export default Stats;

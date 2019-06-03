import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';
import PricingItem from './PricingItem/PricingItem';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingList}>
    {items.map(el => (
      <li key={el.label} className={styles.item}>
        <PricingItem
          label={el.label}
          capacity={el.capacity}
          description={el.description}
          price={el.price}
          icon={el.icon}
        />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;

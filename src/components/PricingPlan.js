import React from 'react';
import PricingItem from './PricingItem';
import PropTypes from 'prop-types';

const PricingPlan = ({ items }) => (
  <ul className="pricing-plan">
    {items.map(el => (
      <li key={el.label} className="item">
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

import React from 'react';
import PricingItem from './PricingItem';

// const PricingPlan = ({ children }) => (
//   <ul className="pricing-plan">{children}</ul>
// );

const PricingPlan = ({ items }) => (
  <ul className="pricing-plan">
    {items.map(el => (
      <li key={el.label} className="item">
        <PricingItem />
      </li>
    ))}
  </ul>
);

export default PricingPlan;

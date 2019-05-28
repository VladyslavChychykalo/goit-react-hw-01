import React from 'react';
import PropTypes from 'prop-types';

const PricingItem = ({
  label,
  icon,
  capacity,
  price,
  description,
  alt = 'icon',
}) => (
  <div className="pricing-item">
    <img src={icon} className="icon" alt={alt} />
    <h2 className="label">{label}</h2>
    <p className="capacity">{capacity}</p>
    <p className="description">{description}</p>
    <p className="price">${price}</p>
    <button className="button">Get Started</button>
  </div>
);

PricingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.item}>
    <i
      style={{
        background: `url(${icon})`,
        height: '162px',
        margin: '0 auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        width: '214px',
        display: 'block',
      }}
    />
    <h2 className={[styles[label], styles.label].join(' ')}>{label}</h2>
    <p className={styles.capacity}>{capacity}</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}</p>
    <button className={styles[`${label}Button`]}>Get Started</button>
  </div>
);

PricingItem.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default PricingItem;

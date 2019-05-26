import React, { Fragment } from 'react';

// const PricingItem = ({ items }) => (
//   <Fragment>
//     {items.map(el => (
//       <li className="item">
//         <div className="pricing-item">
//           <img src={el.icon} className="icon" alt="icon" />
//           <h2 className="label">{el.label}</h2>
//           <p className="capacity">{el.capacity}</p>
//           <p className="description">{el.description}</p>
//           <p className="price">${el.price}</p>
//           <button className="button">Get Started</button>
//         </div>
//       </li>
//     ))}
//   </Fragment>
// );

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className="pricing-item">
    <img src={icon} className="icon" alt="icon" />
    <h2 className="label">{label}</h2>
    <p className="capacity">{capacity}</p>
    <p className="description">{description}</p>
    <p className="price">${price}</p>
    <button className="button">Get Started</button>
  </div>
);
export default PricingItem;

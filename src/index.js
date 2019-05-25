import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import Stats from './components/Stats';
import TransactionHistory from './components/TransactionHistory';

// ============================================================ Элементы

// const link = React.createElement(
//   'a',
//   { href: 'https://reactjs.org/' },
//   'reactjs.org',
// );

// const image = React.createElement('img', {
//   src:
//     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
//   alt: 'Tacos With Lime',
//   width: 640,
// });

// const title = React.createElement('h2', null, 'Tacos With Lime');
// const price = React.createElement('p', null, 'Price: 10$');
// const button = React.createElement('button', { type: 'button' }, 'Add to card');

// const product = React.createElement(
//   'div',
//   null,
//   image,
//   title,
//   price,
//   button,
//   link,
// );

// // Для передачи детей можно использовать свойство `children` параметра `props`
// const productWithChildrenInProps = React.createElement('div', {
//   children: [image, title, price, button, link],
// });

// ReactDOM.render(product, document.getElementById('root'));

// ======================================================================= Компоненты
// const Product = props => (
//   <div>
//     <img src={props.imgUrl} alt={props.alt} width={props.width} />
//     <h2>{props.name}</h2>
//     <p>Price: {props.price}</p>
//     <button>Add to card</button>
//   </div>
// );

// ReactDOM.render(
//   <Product
//     name="Tacos Wiht Lime"
//     imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
//     alt="Tacos With Lime"
//     price="10$"
//     width="640"
//   />,
//   document.getElementById('root'),
// );

// ============================================================= Свойство props.children

// const Profile = ({ name, email }) => (
//   <div>
//     <p>Name: {name}</p>
//     <p>Email: {email}</p>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// const App = () => (
//   <div>
//     <Panel title="User profile">
//       {/* props.children */}
//       <Profile name="Mango" email="mango@mail.com" />
//     </Panel>
//   </div>
// );

// ===============================================
const user = {
  name: 'Vladyslav Chychykalo',
  tag: '@vladyslav',
  location: 'Kiev, Ukraine',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

ReactDOM.render(
  <Fragment>
    <Profile user={user} />
    <Stats />
    <TransactionHistory />
  </Fragment>,
  document.getElementById('root'),
);

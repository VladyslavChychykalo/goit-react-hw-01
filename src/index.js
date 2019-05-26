import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import Profile from './components/Profile';
// import Stats from './components/Stats';
// import TransactionHistory from './components/TransactionHistory';

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

ReactDOM.render(<App />, document.getElementById('root'));

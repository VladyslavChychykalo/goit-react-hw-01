import React, { Fragment } from 'react';
import Profile from './Profile';
// import Stats from './Stats';
// import TransactionHistory from './TransactionHistory';

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

const App = () => (
  <Fragment>
    <Profile user={user} />
    {/* <Stats />
    <TransactionHistory /> */}
  </Fragment>
);

export default App;

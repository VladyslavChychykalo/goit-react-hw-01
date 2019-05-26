import React, { Fragment } from 'react';
import Profile from './Profile';
import Stats from './Stats';
import PricingPlan from './PricingPlan';
// import PricingItem from './PricingItem';
import pricingPlanItems from '../path/to/pricing-plan.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../path/to/transactions.json';

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

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => (
  <Fragment>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    {/* <PricingPlan>
      <PricingItem items={pricingPlanItems} />
    </PricingPlan> */}
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
  </Fragment>
);

export default App;

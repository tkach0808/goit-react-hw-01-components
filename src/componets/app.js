import React from 'react';
import user from './profile/user.json';
import Profile from './profile/profile';
import statisticalData from './uploadstats/statistical-data.json';
import Statistics from './uploadstats/uploadstats';
import friends from './friendlist/friends.json';
import FriendList from './friendlist/friendlist';
import transactions from './transactionhistory/transactions.json';
import TransactionHistory from './transactionhistory/transactionhistory';
export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

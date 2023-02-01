import { Profile } from './Profile/Profile'
import { Statistics } from './Statistics/Statistics'
import { FrendList } from './FriendList/FriendList'
import {TransactionHistory}from './TransactionHistory/TransactionHistory'
import user from '../assets/user.json'
import data from '../assets/data.json'
import friends from '../assets/friends.json'
import transactions from '../assets/transactions.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        gap:'100px',
        flexWrap: 'wrap',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    
      <Profile
        username={user.username}        
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> 

      <Statistics stats={data} />
      
      <FrendList friends={friends} />
      
      <TransactionHistory items={transactions} />;

    </div>
  );
};

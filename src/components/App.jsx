import { Profile } from './Profile/Profile'
import {Statistics} from './Statistics/Statistics'
import user from '../assets/user.json'
import data from '../assets/data.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
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
      <Statistics stats = {data}/>

    </div>
  );
};
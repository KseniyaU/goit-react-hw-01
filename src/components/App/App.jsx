// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import userData from '../../data/Profile.json'
import friends from "../../data/friends.json"
import transactions from '../../data/transactions.json'
import { Profile } from '../Profile/Profile';
import { FriendList } from '../FriendList/FriendList';




const App = () => {
    return (
      <>
        {
          userData.map((even, idx) =>(
            <Profile
              key={idx}
              name={even.username}
              tag={even.tag}
              location={even.location}
              image={even.avatar}
              stats={even.stats}
           />
        ))}
       <FriendList friends={friends} />
      </>
    );

  
};
export default App;
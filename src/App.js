import React from 'react';
import './App.css';
import ProfilePhoto from '../src/Components/Profile/ProfilePhoto';
import Fullname from './Components/Profile/FullName';
import Address from './Components/Profile/Address';

function App() {
  return (
    <div className="App">
      
        <ProfilePhoto/>
        <Fullname/>
        <Address/>
        
      
    </div>
  );
}

export default App;



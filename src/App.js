import React from 'react';
import './App.css';
import address from './Components/Profile/Address';
import photo from './Components/Profile/ProfilePhoto';
import fullname from './Components/Profile/FullName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <photo/>
        <fullname/>
        <address/>
      </header>
    </div>
  );
}

export default App;



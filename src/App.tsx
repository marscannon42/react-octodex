import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import OctodexCats from './OctodexCats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavBar /> */}
        <OctodexCats />
      </header>
    </div>
  );
}

export default App;

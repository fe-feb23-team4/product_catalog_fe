import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Saint Coders Team</p>
      </header>
      <Header />
    </div>
  );
}

export default App;

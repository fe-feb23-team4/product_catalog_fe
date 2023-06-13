import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { CardItem } from './components/CardItem';
import { Loader } from './components/Loader';
// import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Saint Coders Team</p>
        <Loader />
      </header>
      {/* <Header /> */}
      <CardItem />
    </div>
  );
}

export default App;

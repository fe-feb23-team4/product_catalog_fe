import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Saint Coders Team</p>
      </header>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

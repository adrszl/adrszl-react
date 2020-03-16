import React from 'react';
import Header from './components/Header'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <div id="welcome-section">
        <h1 id="name" className="text-center">Adrian Szlegel</h1>
        <p className="text-center">Full Stack Developer</p>
        <p className="text-center" ><a href="https://adrszl.github.io/">Static version</a></p>
        <div className="text-center">
          <img src={logo} className="App-logo" alt="react" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

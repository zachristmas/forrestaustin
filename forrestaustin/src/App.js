import React from 'react';
import Image from './photo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Image} className="App-logo" alt="logo" />
        <p>
          Kaitlyn Christmas is a boss.
          -Forrest
        </p>
        <a
          className="App-link"
          href="http://www.google.com"
          target="_blank"
        >
          Learn Stuff
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import Image from './photo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Image} className="App-logo" alt="logo" />
        <p>
          Forrest is the greatest
          -Zach
        </p>
        <a
          className="App-link"
          href="www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Stuff
        </a>
      </header>
    </div>
  );
}

export default App;

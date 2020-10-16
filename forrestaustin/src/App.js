import React from 'react';
import Image from './photo-2.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Image} className="App-logo" alt="logo" />
        <p>
          I love my nando.
          -uncle zach
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

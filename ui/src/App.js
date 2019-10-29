import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function hit() {
  console.log("hitting endpoint");
  axios.get("http://localhost:8080")
      .then(res => alert(res.data));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit hizz<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <button onClick={hit()}></button>
      </header>
    </div>
  );
}

export default App;

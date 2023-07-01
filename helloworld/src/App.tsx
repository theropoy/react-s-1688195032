import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])


  return (
    <div className="App">
     
    </div>
  );
}

export default App;

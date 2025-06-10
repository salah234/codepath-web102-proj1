import React from 'react'
import './App.css'
import celticsImg from './assets/celtics.png'
import Schedule from './components/Schedule.jsx'

function App() {
  return ( 
    <>
    <div className="App">
      <h1>Boston Celtics 2025-26 Team Schedule</h1>
      <img src={celticsImg} width={400} height={400}></img>
    </div>
    <Schedule/>
    </>
  );
}

export default App

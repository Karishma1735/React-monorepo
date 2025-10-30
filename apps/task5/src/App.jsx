import React from 'react'
import { useState } from 'react';

function App() {
    const [val , setVal]=useState(0);
  
  const valueHandler = (e) => {
    let value = e.target.value;

    if (value === '') {
      setVal('');
      return;
    }

    if (value > 100) {
      alert("Enter less than 100");
      setVal('');
      return;
    }

    if (value < 0) {
      alert("Enter greater than 0");
      setVal('');
      return;
    }

    setVal(value);
  };
  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <div
          className="progress "
          style={{ width: `${val}%` }}
        ><p >`${val}</p></div>
        <form>
          <label htmlFor="progress-bar">Input Percentage:</label>
          <input type="number" id='progress-bar' onChange={(e)=>{valueHandler(e)}} />
        </form>
      </div>
    </>
  )
}

export default App
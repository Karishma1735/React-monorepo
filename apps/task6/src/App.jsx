import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [timer, settimer] = useState(10);
  const [count, setCount] = useState(0);
  const timerID = useRef(null);

  useEffect(() => {
    timerID.current = setInterval(() => {
      settimer(prev => {
        if (prev <= 1) {
          clearInterval(timerID.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerID.current);
  }, []);

  return (
    <div className=" div">
      <h1>No. of Clicks until timer expires</h1>
      <div>
        <div>{count}</div>
        <div data-testid='timer'>Time Left: {timer} </div>
      </div>
      {timer > 0 && (
        <button
          onClick={() => setCount(count => count + 1)}
          className="button"
        >
          +
        </button>
      )}
    </div>
  );
}

export default App;

// import "./index.css";
import { useState } from "react";
import { useRef } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [intervaltime,setintervaltime] = useState(null)
  // const intervalRef = useRef(null)
  const startTimer = () => {
       clearInterval(intervaltime )
     const time = setInterval(()=>setTimer(time=>time+1),1000)
     setintervaltime(time)
   
  };
  const stopTimer = () => {
    clearInterval(intervaltime )
    setintervaltime(null)
  
  };
  const resetTimer = () => {
     clearInterval( intervaltime)
     setintervaltime(null)
      setTimer(0)
  };
  return (
    <div className="container">
      <h1>Timer</h1>
      {/* <span> {Math.floor(timer/60)} min </span> */}
      {/* <span>{Math.floor(timer%60)} seconds</span> */}

      <span>{Math.floor(timer / 60)} min {Math.floor(timer % 60)} seconds</span>

      <div>
        <button onClick={startTimer} >Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./index.css";

export default function App() {
  const [showText, setShowText] = useState(false);
  return (
    <div className="App">
      <button id="button" onClick={() => setShowText(!showText)}>
        {showText ? "Hide text" : "Show text"}
      </button>
      {showText && <h1>Welcome to React Challenges</h1>}
    </div>
  );
}

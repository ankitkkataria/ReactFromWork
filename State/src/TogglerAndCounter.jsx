import { useState } from "react";
import "./TogglerAndCounter.css"
export default function TogglerAndCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  const incrementCount = () => setCount(count + 2);
  return (
    <div className="TogglerAndCounter" >
      <p onClick={toggleIsHappy}>
        {isHappy ? ":)" : ":("}
      </p>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

// Both of the states exist inside the same component but they are independent of each other.

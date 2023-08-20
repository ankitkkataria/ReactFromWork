import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  const changeNum = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>{num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}

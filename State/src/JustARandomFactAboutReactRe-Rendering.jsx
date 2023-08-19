import { useState } from "react";

export default function TogglerRandom() {
  const [value, setValue] = useState(true);
  const [count, setCount] = useState(0);

  const toggleValue = () => {
    setValue(!value);
    console.log("In Between of Both States");
    setCount(count + 1);
    console.log("States finished!");
  };

  const string = value ? "Happy :)" : "Sad :(";

  return (
    <div>
      <h1>{string}</h1>
      <h2>{count}</h2>
      <button onClick={toggleValue}>Toggle</button>
    </div>
  );
}


// Question :- So when we have multiple state changes like in the below code, react re-renders the component, but why does both the console logs show up in the console when i click the button. Shouldn't it re-render the component after the last state change function. I am really confused about this and don't understand how react re-renders the component after a state change and what code will run or will not run after a state change inside that function ?

// Answer :- State updates in React are asynchronous and batched for performance reasons, meaning they are not immediately applied but grouped together to minimize re-renders. When you call a state updating function like setValue or setCount, React will schedule the update to be processed in the next render cycle, not instantaneously.In your toggleValue function, both console.log statements execute because they are called immediately, before the state updates are actually committed. The entire function body runs to completion and then, at some later point, React updates the state and re-renders the component.
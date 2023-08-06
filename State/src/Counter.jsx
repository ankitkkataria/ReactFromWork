import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0); // The value inside the useState will be used as the intial value for the variable.
  const changeNum = () => {
    setNum(num + 1); // We are not putting num += 1 cause num += 1 is a shorthand for num = num + 1, which modifies the variable num directly. However, in React, you shouldn't directly mutate a state variable, instead you use a state setter function (setNum in this particular case), in this case setNum, to update the state. setNum(num + 1) is effectively telling React to update num with num + 1. This is essential to keep React's re-rendering behavior consistent with state changes.
  };
  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}
/*
But the main takeaways from this video are useState is a hook that we use. It comes with react. We use it to add a state variable into a component. You have to import useState. If you want to use it, you have to call useState in a component. It can't be outside the component and it returns an array with two elements. The first element is the thing, the value, the piece of state. The second thing is a function to change that piece of state. And most often you'll see it named X, and then the function will be setX like count, setCount or color, setColor that sort of thing.
All right.
So, Basically you can think of state variable as like a adding a event listener to the a variable that re-renders this entire component when the value of that variable as and when the value of the variable is changed through the function that useState provided us.
So, useState provides us with three things.
1) A variable called state variable.
2) A way to assign an initial value to that variable.
3) A function that can change the value of that variable and when the value is changed through that variable the entire component is re-rendered to reflect the new value on the webpage.
*/
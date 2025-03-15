import { useState } from "react";

export default function CounterComponent() {
  // useState() is a method (irl, it is a react hook) which takes one initial value.
  // this method returns an array of exact two values...
  // the first value is related to our state
  // the second value is a method which is used to change our state and re-render our component on the dom with the updated change in the state...

  let [count, setCount] = useState(1);

  const increaseCount = () => {
    count < 15 && setCount(count + 1);
  };

  const decreaseCount = () => {
    count > 1 && setCount(count - 1);
  };

  const styles = { marginRight: 20 + "px" };

  return (
    <>
      <h2>React useState example</h2>
      <p>Count: {count}</p>
      <button onClick={decreaseCount} style={styles}>
        Decrease
      </button>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
}

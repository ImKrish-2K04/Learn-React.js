import CounterContext from "../context/counterContext";
import { useContext } from "react";

export const Counter = () => {
  // accessing the setCount method for functions
  const { setCount } = useContext(CounterContext);

  const handleIncrement = () => {
    setCount((prevValue) => {
      if (prevValue < 100) return prevValue + 1;
      else return 100;
    });
  };

  const handleDecrement = () => {
    setCount((prevValue) => {
      if (prevValue >= 1) return prevValue - 1;
      else return 0;
    });
  };

  return (
    <div className="button-container">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

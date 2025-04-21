import "./Main.css";
import { useState, useRef } from "react";
import { Header } from "./Header";
import { CounterDisplay } from "./CounterDisplay";
import { StepInput } from "./StepInput";
import { ButtonGroup } from "./ButtonGroup";

export const CounterComponent = () => {
  const [steps, setSteps] = useState(null);
  const [count, setCount] = useState(0);
  const inputRef = useRef(null); // Create a reference for the input field

  const handleSteps = (e) => {
    setSteps(Number(e.target.value));
  };

  const handleIncrement = () => {
    setCount(count + steps <= 100 ? count + steps : count);
  };

  const handleDecrement = () => {
    setCount(count - steps >= 0 ? count - steps : count);
  };

  const handleReset = () => {
    setCount(0);
    setSteps("");
    inputRef.current.focus(); // Focus the input field
  };

  return (
    <div className="container">
      <Header />

      <main className="hero">
        <CounterDisplay count={count} />

        <StepInput
          steps={steps}
          handleSteps={handleSteps}
          inputRef={inputRef}
        />

        <ButtonGroup
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleReset={handleReset}
        />
      </main>
    </div>
  );
};

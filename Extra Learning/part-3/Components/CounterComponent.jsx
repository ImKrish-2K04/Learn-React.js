import "./Style.css";
import React, { useContext } from "react";
import { Counter } from "./Counter";
import CounterContext from "../context/counterContext";

const CounterComponent = () => {
  const { count } = useContext(CounterContext);

  return (
    <div className="container">
      <h1>Count is {count}</h1>
      <Counter />
    </div>
  );
};

export default CounterComponent;

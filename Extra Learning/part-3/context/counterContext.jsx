import { createContext, useState } from "react";

// creating a global context variable and assigning a null to it
const CounterContext = createContext(null);

// creating a context provider and setting it up
export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};

// exporting the CounterContext, so that we can access it to use and manipulate the global data
export default CounterContext;

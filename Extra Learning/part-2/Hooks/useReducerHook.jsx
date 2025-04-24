import { useReducer } from "react";

const UseReducerDemo = () => {
  const initialValue = {
    count: 0,
    steps: 1,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count:
            state.count + state.steps <= 100
              ? state.count + state.steps
              : state.count,
        };
      case "decrement":
        return {
          ...state,
          count:
            state.count - state.steps >= 0
              ? state.count - state.steps
              : state.count,
        };
      case "set":
        return {
          ...state,
          count:
            action.payload >= 0 && action.payload <= 100
              ? action.payload
              : state.count,
        };
      case "reset":
        return {
          count: 0,
          steps: 1,
        };
      case "customInputValue":
        return {
          ...state,
          count:
            action.payload >= 0 && action.payload <= 100
              ? action.payload
              : state.count,
        };
      case "customStepsValue":
        return {
          ...state,
          steps:
            action.payload >= 1 && action.payload <= 10
              ? action.payload
              : state.steps,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleInputValue = (e) => {
    let value = Number(e.target.value);
    dispatch({ type: "customInputValue", payload: value });
  };

  const handleStepsCount = (e) => {
    let steps = Number(e.target.value);
    dispatch({ type: "customStepsValue", payload: steps });
  };

  const divStyle = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const buttonDivStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Corrected property name
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
  };

  const btns = {
    border: "1px solid black",
    paddingInline: "10px",
    paddingBlock: "2px",
    borderRadius: "4px",
  };

  const numberField = {
    border: "1px solid black",
    padding: "4px",
    borderRadius: "4px",
  };

  const inputField = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <div style={divStyle}>
      <h1>Count: {state.count}</h1>
      <div style={buttonDivStyle}>
        <button
          style={btns}
          onClick={() => dispatch({ type: "increment" })}
          disabled={state.count >= 100}
        >
          Increment
        </button>
        <button
          style={btns}
          onClick={() => dispatch({ type: "decrement" })}
          disabled={state.count <= 0}
        >
          Decrement
        </button>
        <button
          style={btns}
          onClick={() => dispatch({ type: "set", payload: 90 })}
        >
          set to 90
        </button>
        <button style={btns} onClick={() => dispatch({ type: "reset" })}>
          reset
        </button>
      </div>
      <div style={inputField}>
        <div className="countValue">
          <label htmlFor="">count:</label>
          <input
            type="number"
            min={0}
            max={100}
            style={numberField}
            value={state.count}
            onChange={handleInputValue}
          />
        </div>

        <div className="stepValue">
          <label htmlFor="">steps:</label>
          <input
            type="number"
            min={1}
            max={10}
            style={numberField}
            value={state.steps}
            onChange={handleStepsCount}
          />
        </div>
      </div>
    </div>
  );
};

export default UseReducerDemo;

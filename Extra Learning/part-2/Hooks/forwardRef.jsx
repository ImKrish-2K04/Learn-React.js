import { forwardRef, useRef } from "react";

// Parent component
export const UseForwardRef = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const inputStyle = {
    margin: "2px 10px",
    border: "1px solid black",
    padding: "4px",
  };

  return (
    <>
      {/* Old way: React 18 and before */}
      {/* <ChildComponent1
        ref={inputRef}
        placeholder="Enter something..."
        inputStyle={inputStyle}
      /> */}

      {/* New way: React 19 and future */}
      {/* just passing a ref as a prop to the child component and done! */}
      <ChildComponent2
        inputRef={inputRef}
        placeholder="Enter something..."
        inputStyle={inputStyle}
      />
      <br />
      <button style={inputStyle} onClick={focusInput}>
        Focus input field
      </button>
    </>
  );
};

// ✅ React 18 way — using forwardRef
const ChildComponent1 = forwardRef((props, ref) => {
  const { placeholder, inputStyle } = props;

  const printValueInConsole = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      ref={ref}
      style={inputStyle}
      placeholder={placeholder}
      onChange={printValueInConsole}
    />
  );
});

// ✅ React 19 way — passing ref as a custom prop (e.g., inputRef)
const ChildComponent2 = ({ inputRef, placeholder, inputStyle }) => {
  const printValueInConsole = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      ref={inputRef}
      style={inputStyle}
      placeholder={placeholder}
      onChange={printValueInConsole}
    />
  );
};

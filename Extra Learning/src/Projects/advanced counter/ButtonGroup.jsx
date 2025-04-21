export const ButtonGroup = ({
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div className="buttons-container">
      <button className="common-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="common-btn" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="common-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

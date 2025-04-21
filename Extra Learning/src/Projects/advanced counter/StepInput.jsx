export const StepInput = ({ steps, handleSteps, inputRef }) => {
  return (
    <div className="steps">
      <label htmlFor="steps-field">Step: </label>
      <input
        type="number"
        name="step"
        id="steps-field"
        min={1}
        max={100}
        value={steps}
        onChange={handleSteps}
        ref={inputRef} // Attach the reference to the input field
      />
    </div>
  );
};

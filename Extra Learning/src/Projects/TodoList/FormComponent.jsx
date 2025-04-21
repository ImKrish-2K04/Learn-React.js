export function FormComponent({ inputValue, setInputValue, handleSubmit }) {
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="input-field"
            className="todo-input"
            autoComplete="off"
            value={inputValue.value}
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                value: e.target.value,
              })
            }
            required
          />
          <input type="submit" value="Add Task" />
        </div>
      </form>
    </section>
  );
}

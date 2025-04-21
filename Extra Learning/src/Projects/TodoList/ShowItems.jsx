import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export function ShowTodoItems({ task, handleDeleteTodo, handleListChecking }) {
  return (
    <section className="todo-items">
      <ul>
        {task.map((value) => (
          <li key={value.id}>
            <span className={value.isChecked ? "check" : "uncheck"}>
              {value.value}
            </span>
            <div className="actions">
              <button
                className="check-btn"
                onClick={() => handleListChecking(value.id)}
              >
                <FaCheckCircle />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(value.id)}
              >
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

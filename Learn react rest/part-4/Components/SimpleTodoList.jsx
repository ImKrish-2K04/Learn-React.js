import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./SimpleTodoList.css";

export default function CreateTodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentTodoId, setCurrentTodoId] = useState(null);
  const [isUpdateActive, setIsUpdateActive] = useState(false);
  const [clickTimeout, setClickTimeout] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddOrUpdateTodoList = () => {
    if (inputValue.trim() === "") return;

    if (isUpdateActive) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === currentTodoId ? { ...todo, task: inputValue } : todo
        )
      );
      setIsUpdateActive(false);
      setCurrentTodoId(null);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { task: inputValue, id: uuidv4(), completed: false },
      ]);
    }

    setInputValue("");
  };

  const handleDeleteTodoList = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (id === currentTodoId) {
      setInputValue("");
      setIsUpdateActive(false);
      setCurrentTodoId(null);
    }
  };

  const handleUpdateListValue = (id) => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
    }

    const requiredListObject = todos.find((todo) => todo.id === id);
    if (requiredListObject) {
      setClickTimeout(
        setTimeout(() => {
          setInputValue(requiredListObject.task);
          setCurrentTodoId(id);
          setIsUpdateActive(true);
        }, 250) // Delay to differentiate single vs. double click
      );
    }
  };

  const handleMarkAsCompleted = (id) => {
    if (clickTimeout) {
      clearTimeout(clickTimeout);
      setClickTimeout(null);
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleShortCutsExplainer = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className="main-container">
      <div
        onClick={handleShortCutsExplainer}
        title="shortcuts"
        className="info"
      >
        ?
      </div>

      <div className="input-box">
        <input
          type="text"
          value={inputValue}
          placeholder="Add some TODO"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddOrUpdateTodoList()}
        />
        <button onClick={handleAddOrUpdateTodoList}>
          {isUpdateActive ? "Upd" : "Add"}
        </button>
      </div>

      <ul className="todo-container">
        {todos.map((element) => (
          <li className="todo-item" key={element.id}>
            <span
              onClick={() => handleUpdateListValue(element.id)}
              onDoubleClick={() => handleMarkAsCompleted(element.id)}
              className={element.completed ? "task completed" : "task"}
            >
              {element.task}
            </span>
            <button
              onClick={() => handleDeleteTodoList(element.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseModal}>
              ✖
            </button>
            <h3 style={{ marginBottom: "10px" }}>Shortcuts</h3>
            <p>🔹 Click: on a task to edit it.</p>
            <p>🔹 Double-click: to mark as complete.</p>
            <p>🔹 Press Enter: to add/update a task.</p>
          </div>
        </div>
      )}
    </div>
  );
}

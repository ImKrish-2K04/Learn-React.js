import "./Todo.css";
import { useState, useEffect } from "react";
import { HeaderComponet } from "./HeaderComponent";
import { FormComponent } from "./FormComponent";
import { ShowTodoItems } from "./ShowItems";

export function CreateTodo() {
  const [inputValue, setInputValue] = useState({
    id: "",
    value: "",
    isChecked: false,
  });
  const [task, setTask] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = localStorage.getItem("userTasks");
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
    setIsMounted(true); // Mark the component as mounted
  }, []);

  // Sync task state to localStorage, but skip the initial render
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("userTasks", JSON.stringify(task));
    }
  }, [task, isMounted]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.value) return;

    const isInputValueExists = task.find(
      (currTask) => currTask.value === inputValue.value
    );

    if (isInputValueExists) {
      window.alert(inputValue.value + " already exists!");
      setInputValue({ id: "", value: "", isChecked: false });
      return;
    }

    setTask((prev) => [
      ...prev,
      {
        id: Date.now(),
        value: inputValue.value,
        isChecked: false,
      },
    ]);

    setInputValue({ id: "", value: "", isChecked: false });
  };

  const handleDeleteTodo = (id) => {
    setTask(task.filter((val) => val.id !== id));
  };

  const handleListChecking = (id) => {
    const updateTask = task.map((currTask) => {
      if (currTask.id === id) {
        return { ...currTask, isChecked: !currTask.isChecked };
      } else {
        return currTask;
      }
    });
    setTask(updateTask);
  };

  return (
    <section className="todo-container">
      <HeaderComponet />

      <FormComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />

      <ShowTodoItems
        task={task}
        handleDeleteTodo={handleDeleteTodo}
        handleListChecking={handleListChecking}
      />
    </section>
  );
}

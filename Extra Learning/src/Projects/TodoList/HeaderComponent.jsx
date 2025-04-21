import { useState, useEffect } from "react";

export function HeaderComponet() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const currentDate = date.toLocaleDateString();
      const updatedTime = date.toLocaleTimeString();

      setDateTime(`${currentDate} - ${updatedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <h1>Todo List</h1>
      <h2>{dateTime}</h2>
    </header>
  );
}

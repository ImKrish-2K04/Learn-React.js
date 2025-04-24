import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ChangeTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`w-screen min-h-screen flex justify-center items-center flex-col ${
        theme === "dark" ? "bg-white text-slate-800" : "bg-slate-800 text-white"
      }`}
    >
      <h1 className="text-3xl font-semibold mb-8">Dark/Light Mode Website</h1>
      <p className="mb-6 text-lg">Hello World, This is React v19 App</p>
      <button
        onClick={handleToggleTheme}
        className="bg-blue-600 p-2 text-white rounded-lg w-44"
      >
        {theme === "dark" ? "Switch to Light mode" : "Switch to Dark mode"}
      </button>
    </div>
  );
};

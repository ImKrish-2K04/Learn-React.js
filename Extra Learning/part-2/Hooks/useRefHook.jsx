import { useId, useRef } from "react";

/**
 * useRef() and useId() Hook Demo
 *
 * - useRef(): This hook provides a way to access DOM elements or store mutable values that persist across renders
 *   without causing re-renders. Super useful for things like form elements, animations, or third-party libraries.
 *
 * - useId(): React 18+ feature. It generates a unique, consistent ID on both client and server.
 *   It's NOT meant for keys in lists but great for associating form elements (label + input)
 *   and ensuring uniqueness (especially in SSR scenarios).
 */

export const UseRefHookDemo = () => {
  // useRef is used here to directly access the input fields (uncontrolled components)
  const username = useRef(null);
  const password = useRef(null);

  // useId generates a unique ID string - useful for avoiding ID collisions in SSR/CSR
  const id = useId();

  const inputStyle = {
    border: "1px solid black",
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Accessing the current value (DOM node) of refs
    console.log("Username input height:", username.current.clientHeight);
    console.log("Password value:", password.current.value);

    // You can also do stuff like username.current.focus() if needed
  };

  return (
    <div className="container">
      <h2>🧪 useRef & useId Hook Demo</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Username Field */}
        <div className="username">
          {/* id is uniquely generated using useId() to prevent collisions */}
          <label htmlFor={id + "-username"}>Username:</label>
          <input
            type="text"
            name="username"
            style={inputStyle}
            id={id + "-username"}
            ref={username} // attaching ref to input for direct DOM access
          />
        </div>

        {/* Password Field */}
        <div className="password">
          <label htmlFor={id + "-password"}>Password:</label>
          <input
            type="password"
            name="password"
            style={inputStyle}
            id={id + "-password"}
            ref={password} // another useRef for password
          />
        </div>

        {/* Submit Button */}
        <div className="submit">
          <input type="submit" value="Submit" className="submit-btn" />
        </div>
      </form>
    </div>
  );
};

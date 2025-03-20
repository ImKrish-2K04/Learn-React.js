import { useState } from "react";

export default function RegistrationForm() {
  const [formProperties, setFormProperties] = useState({
    userName: "",
    password: "",
  });

  const handleFormParoperties = (e) => {
    setFormProperties((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };

  const stopDefaultBehavior = (e) => {
    console.log(formProperties);
    setFormProperties({
      userName: "",
      password: "",
    });
    e.preventDefault();
  };

  return (
    <form action="#" onSubmit={stopDefaultBehavior}>
      <div className="username-section grid-two-cols">
        <label htmlFor="userName">Enter username</label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={formProperties.userName}
          onChange={handleFormParoperties}
        />
      </div>

      <div className="password-section grid-two-cols">
        <label htmlFor="passwd">Enter password</label>
        <input
          type="password"
          name="password"
          id="passwd"
          value={formProperties.password}
          onChange={handleFormParoperties}
        />
      </div>

      <div className="submit-btn-section grid-two-cols">
        <button className="submit-btn">Submit</button>
      </div>
    </form>
  );
}

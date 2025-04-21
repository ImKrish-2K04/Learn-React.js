import "./Main.css";
import { useState } from "react";
import { Header } from "./Header";
import { InputFields } from "./InputField";
import { SubmitForm } from "./Submit";

export const LoginForm = () => {
  const [userData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!userData.userEmail) {
      newErrors.emailError = "please provide an email.";
    } else if (!/\S+@\S+\.\S+/.test(userData.userEmail)) {
      newErrors.emailError = "envalid email entered.";
    }

    if (!userData.userPassword) {
      newErrors.passwordError = "please enter a password.";
    } else if (userData.userPassword.length <= 6) {
      newErrors.passwordError = "enter password with more than 6 letters";
    }

    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let err = validate();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    console.log(userData);

    setUserData({
      userEmail: "",
      userPassword: "",
    });

    setErrors({});
  };

  return (
    <div className="container">
      <Header />
      <form className="reg-form" onSubmit={handleFormSubmit}>
        <InputFields
          label="Enter Email"
          type="text"
          name="userEmail"
          id="inp_email"
          errors={errors.emailError}
          userData={userData}
          handleChange={handleChange}
        />
        <InputFields
          label="Enter Password"
          type="password"
          name="userPassword"
          id="inp_pass"
          errors={errors.passwordError}
          userData={userData}
          handleChange={handleChange}
        />
        <SubmitForm />
      </form>
    </div>
  );
};

import css from "../LoginForm/LoginForm.module.css"

import { useState } from "react";

export const LoginForm = ({ onSubmit }) => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    setValues({
      login: "",
      password: "",
    });
  };

  return (
    <div>
      <h2>Enter your login and password</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="login"
          value={values.login}
          onChange={handleFormChange}
          required
          className={css.input}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleFormChange}
          required
          className={css.input}
        />
        <button type="submit" className={css.btn}>Login</button>
      </form>
      <hr />
    </div>
  );
};

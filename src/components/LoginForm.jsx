import { useState } from "react";

export const LoginForm = ({ onSubmit }) => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setValues({
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
        <h2>Plese, enter your ligin and password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          value={values.login}
          onChange={handleFormChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleFormChange}
        />
        <button type="submit">Login</button>
      </form>
      <hr />
    </div>
  );
};

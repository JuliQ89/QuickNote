import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { register } from "../redux/types";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const validateForm = () => {
    if (
      formData.email.trim() == "" ||
      formData.password.trim() == "" ||
      formData.username.trim() == ""
    )
      return false;
    return true;
  };

  const clearFormData = () => {
    setFormData({ ...formData, username: "", email: "", password: "" });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateForm()) dispatch(register(formData));
    clearFormData();
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;

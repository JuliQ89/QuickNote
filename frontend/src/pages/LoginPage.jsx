import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const clearFormData = () => {
    setFormData({ ...formData, email: "", password: "" });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: "auth/login",
      payload: formData,
    });
    clearFormData();
    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

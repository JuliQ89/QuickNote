import React, { useEffect, useState } from "react";
import Toast, { notify } from "../components/messages/Toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../redux/types";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const clearFormData = () => {
    setFormData({ ...formData, email: "", password: "" });
  };

  const validateForm = () => {
    let errors = { ...formErrors };

    if (String(formData.email).trim() === "") {
      errors.email = "Dieses Feld ist erforderlich!";
    } else {
      errors.email = "";
    }

    if (String(formData.password).trim() === "") {
      errors.password = "Dieses Feld ist erforderlich!";
    } else {
      errors.password = "";
    }

    setFormErrors(errors);

    if (!errors.email && !errors.password) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleLogin = (e) => {
    e.preventDefault();
    validateForm();
    if (validated) {
      dispatch(login(formData));
      notify("Login war erfolgreich!");
      clearFormData();
      navigate("/");
    }
  };

  return (
    <div className="formularWrapper">
      <Toast />
      <div className="formularContainer">
        <h2>Login</h2>
        <form className="authFormular" onSubmit={handleLogin}>
          <div className="formField">
            {formErrors.email !== "" && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete=""
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="formField">
            {formErrors.password !== "" && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete=""
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <span className="switchRegistration">
          Du hast noch keinen Account <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;

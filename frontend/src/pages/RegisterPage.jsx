import React, { useEffect, useState } from "react";
import Toast, { notify } from "../components/messages/Toast";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const clearFormData = () => {
    setFormData({ ...formData, username: "", email: "", password: "" });
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

    if (String(formData.username).trim() === "") {
      errors.username = "Dieses Feld ist erforderlich!";
    } else {
      errors.username = "";
    }

    setFormErrors(errors);

    if (!errors.email && !errors.password && !errors.username) {
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

  const handleRegister = (e) => {
    e.preventDefault();
    validateForm();
    if (validated) {
      notify("Registrierung war erfolgreich!");
      clearFormData();
    }
  };
  return (
    <div className="formularWrapper">
      <Toast />
      <div className="formularContainer">
        <h2>Register</h2>
        <form className="authFormular" onSubmit={handleRegister}>
          <div className="formField">
            {formErrors.username !== "" && (
              <span className="errorMessage">{formErrors.username}</span>
            )}
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete=""
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
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
          <button type="submit">Register</button>
        </form>
        <span className="switchRegistration">
          Du hast schon einen Account <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;

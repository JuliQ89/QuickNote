import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./layouts/PrivateRoutes";
import MainContainer from "./layouts/MainContainer";

import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { loginUserOnPageLoad } from "./utils/auth";

function App() {
  useEffect(() => {
    loginUserOnPageLoad();
    console.log(process.env.REACT_APP_BACKEND_URL);
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainContainer header={true}>
                <HomePage />
              </MainContainer>
            }
          />
          <Route
            path="/login"
            element={
              <MainContainer header={true}>
                <LoginPage />
              </MainContainer>
            }
          />
          <Route
            path="/register"
            element={
              <MainContainer header={true}>
                <RegisterPage />
              </MainContainer>
            }
          />
          <Route
            path="/notes"
            element={
              <PrivateRoutes>
                <MainContainer header={false}>
                  <NotePage />
                </MainContainer>
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./layouts/PrivateRoutes";
import MainContainer from "./layouts/MainContainer";

import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./components/404/NotFound";

import { loginUserOnPageLoad } from "./utils/auth";

function App() {
  useEffect(() => {
    loginUserOnPageLoad();
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainContainer header={true} footer={true}>
                <HomePage />
              </MainContainer>
            }
          />
          <Route
            path="/login"
            element={
              <MainContainer header={true} footer={true}>
                <LoginPage />
              </MainContainer>
            }
          />
          <Route
            path="/register"
            element={
              <MainContainer header={true} footer={true}>
                <RegisterPage />
              </MainContainer>
            }
          />
          <Route
            path="/notes"
            element={
              <PrivateRoutes>
                <MainContainer header={false} footer={false}>
                  <NotePage />
                </MainContainer>
              </PrivateRoutes>
            }
          />
          <Route
            path="*"
            element={
              <MainContainer header={true} footer={true}>
                <NotFound />
              </MainContainer>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import PrivateRoutes from "./layouts/PrivateRoutes";

import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import Header from "./components/header/Header";

import { setTokensFromCookies } from "./redux/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTokensFromCookies());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <main className="mainContainer">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/notes"
              element={
                <PrivateRoutes>
                  <NotePage />
                </PrivateRoutes>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

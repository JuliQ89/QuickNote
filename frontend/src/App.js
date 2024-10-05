import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";

import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import Header from "./components/header/Header";

import { useDispatch, useSelector } from "react-redux";
import { getColorsAction } from "./redux/actions/colorActions";
import { useEffect } from "react";

function App() {
  const data = useSelector((state) => state.colorData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getColorsAction());
  }, [dispatch]);

  useEffect(() => {
    console.log(data);
  }, [data]);
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

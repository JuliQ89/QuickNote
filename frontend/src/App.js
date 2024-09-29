import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";

import HomePage from "./pages/HomePage";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import Header from "./components/header/Header";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <main className="mainContainer">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/notes/"
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

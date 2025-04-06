import { Route, Routes } from "react-router-dom";

import MainPage from "../pages/Main";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import NotFoundPage from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

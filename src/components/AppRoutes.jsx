import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import PrivateRoute from "./PrivateRoute";
import MainPage from "../pages/Main";
import PopUserPage from "../pages/PopUser";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import NotFoundPage from "../pages/NotFound";

function AppRoutes() {
  const [isToken, setIsToken] = useState(
    JSON.parse(localStorage.getItem("localUser"))?.token ? true : false
  );

  return (
    <Routes>
      <Route element={<PrivateRoute isToken={isToken} />}>
        <Route path="/" element={<MainPage setIsToken={setIsToken} />}>
          <Route
            path="/user"
            element={<PopUserPage setIsToken={setIsToken} />}
          />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage setIsToken={setIsToken} />} />
      <Route path="/sign-up" element={<SignUpPage setIsToken={setIsToken} />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import MainPage from "../pages/Main";
import PopUserPage from "../pages/PopUser";
import SignUpPage from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import NotFoundPage from "../pages/NotFound";
import PopNewCardPage from "../pages/PopNewCard";
import PopBrowsePage from "../pages/PopBrowse";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/user" element={<PopUserPage />} />

          <Route path="/new-task" element={<PopNewCardPage />} />

          <Route path="/task-browse/:id" element={<PopBrowsePage />} />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../сontext/AuthContext";
// import {  useNavigate } from "react-router-dom";

function PrivateRoute() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? <Outlet /> : <Navigate to="sign-in" />;

  // const navigate = useNavigate();
  // navigate("sign-in")
}

export default PrivateRoute;

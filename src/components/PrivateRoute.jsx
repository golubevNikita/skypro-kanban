import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
// import {  useNavigate } from "react-router-dom";

function PrivateRoute() {
  const { isToken } = useContext(AuthContext);

  return isToken ? <Outlet /> : <Navigate to="sign-in" />;

  // const navigate = useNavigate();
  // navigate("sign-in")
}

export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";

function PrivateRoute({ isToken }) {
  return isToken ? <Outlet /> : <Navigate to="sign-in" />;

  // const navigate = useNavigate();
  // navigate("sign-in")
}

export default PrivateRoute;

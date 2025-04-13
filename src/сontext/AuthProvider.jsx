import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("localUser"))?.token ? true : false
  );

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

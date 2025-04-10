import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthorisationProvider = ({ children }) => {
  const [isToken, setIsToken] = useState(
    JSON.parse(localStorage.getItem("localUser"))?.token ? true : false
  );

  return (
    <AuthContext.Provider value={{ isToken, setIsToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthorisationProvider;

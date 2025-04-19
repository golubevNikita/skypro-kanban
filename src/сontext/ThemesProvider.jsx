import { useEffect, useState } from "react";
import { ThemesContext } from "./ThemesContext";

import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "../services/themes";

export const ThemesProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const themeInfo = localStorage.getItem("usingTheme");
    return themeInfo === "dark";
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem("usingTheme", isDark ? "dark" : "light");
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemesContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemesContext.Provider>
  );
};

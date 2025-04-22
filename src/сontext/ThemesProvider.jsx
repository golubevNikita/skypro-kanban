import { useEffect, useState } from "react";
import { LS_APP_THEME } from "../services/utilities";
import { lightTheme, darkTheme } from "../services/themes";

import { ThemesContext } from "./ThemesContext";

import { ThemeProvider } from "styled-components";

export const ThemesProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const themeInfo = localStorage.getItem(LS_APP_THEME);
    return themeInfo === "dark";
  });

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem(LS_APP_THEME, isDark ? "dark" : "light");
  }, [isDark]);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemesContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemesContext.Provider>
  );
};

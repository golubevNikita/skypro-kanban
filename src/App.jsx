import "./App.css";
import AppRoutes from "./components/AppRoutes";

import { ThemesProvider } from "./сontext/ThemesProvider";

import { AuthProvider } from "./сontext/AuthProvider";

import { GlobalStyle } from "./pages/Main.styled";

function App() {
  return (
    <ThemesProvider>
      <AuthProvider>
        <GlobalStyle />
        <AppRoutes />
      </AuthProvider>
    </ThemesProvider>
  );
}

export default App;

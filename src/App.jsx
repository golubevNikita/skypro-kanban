import "./App.css";
import AppRoutes from "./components/AppRoutes";

import { ThemesProvider } from "./сontext/ThemesProvider";

import { AuthProvider } from "./сontext/AuthProvider";

function App() {
  return (
    <ThemesProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemesProvider>
  );
}

export default App;

import "./App.css";
import AppRoutes from "./components/AppRoutes";
import AuthorisationProvider from "./components/AuthContext";

function App() {
  return (
    <AuthorisationProvider>
      <AppRoutes />
    </AuthorisationProvider>
  );
}

export default App;

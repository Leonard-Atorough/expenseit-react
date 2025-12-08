import { Outlet } from "react-router";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import { LandingAppBar } from "./components/LandingAppBar";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <LandingAppBar />
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;

import { Outlet } from "react-router";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;

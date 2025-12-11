import { Outlet } from "react-router";
import {useState} from "react";
import "./App.css";
import AuthProvider from "./providers/AuthProvider";
import { LandingAppBar } from "./components/LandingAppBar";

function App() {
  const [page, setPage] = useState<string | undefined>(undefined);

  return (
    <AuthProvider>
      <div className="App">
        <LandingAppBar page={page} />
        <Outlet context={{ setPage }} />
      </div>
    </AuthProvider>
  );
}

export default App;

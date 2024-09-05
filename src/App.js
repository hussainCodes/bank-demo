import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Context/UserContext";
import { useEffect } from "react";
import { checkToken } from "./API/storage";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;

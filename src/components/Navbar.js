import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { deleteToken } from "../API/storage";
import logo from "../assets/media/banklogo.png"
const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    deleteToken();
    setUser(false);
  };
  return (
    <div className="bg-gray-500 items-center justify-items-center">
      <div className="flex bg-green-500 justify-between p-6">
        <NavLink to={"/Home"} className="flex-col justify-items-center items-center align-top text-white font-bold ">
          <img className="w-12 bg-white rounded-full p-0.5" src={logo} alt="logo" />
          Eco Bank
        </NavLink>
        {user ? (
          <>
            <Link
              className="flex border pl-3 pr-3  drop-shadow-xl text-white rounded-md h-10  "
              to={"/"}
              onClick={handleLogout}
            >
              Logout
            </Link>{" "}
          </>
        ) : (
          <></>
        )}
        {/* <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink> */}
      </div>
    </div>
  );
};

export default Navbar;

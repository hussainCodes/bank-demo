import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { deleteToken } from "../API/storage";
import logo from "../assets/media/banklogo.jpg";
const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    deleteToken();
    setUser(false);
  };
  return (
    <div className="bg-gray-500 ">
      <div className="flex bg-green-500 justify-between p-6">
        <NavLink to={"/Home"} className="flex text-white font-bold ">
          <img className="w-10" src={logo} alt="logo" />
          Eco Bank
        </NavLink>
        {user ? (
          <>
            <Link
              className="border pl-3 pr-3  drop-shadow-xl text-white rounded-md "
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

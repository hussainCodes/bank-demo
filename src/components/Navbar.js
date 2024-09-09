import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { deleteToken } from "../API/storage";
const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const handleLogout = () => {
    deleteToken();
    setUser(false);
  };
  return (
    <div className="bg-gray-500 ">
      <div className="flex bg-green-500 justify-between p-6">
        <NavLink to={"/Home"} className="font-bold ">
          Bank
        </NavLink>
        {user ? (
          <>
            <Link to={"/"} onClick={handleLogout}>
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

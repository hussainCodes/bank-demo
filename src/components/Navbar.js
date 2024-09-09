import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UserContext from '../Context/UserContext';
import { deleteToken } from '../API/storage';
const Navbar = () => {
  const [user,setUser ]= useContext(UserContext);
  const handleLogout = ()=>{
    deleteToken();
    setUser(false);
  }
  return (
    
    <div className='bg-gray-500 '>
        <div className='flex bg-green-500 justify-between p-6'>
        <NavLink to={"/"} className='font-bold '>Bank</NavLink >
        { user ? 
              <> <button
              onClick={handleLogout}>Logout</button> </> : 
              <>
                <NavLink
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </NavLink>
              </> }
        {/* <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink> */}
        
        </div>
    </div>
  )
}

export default Navbar
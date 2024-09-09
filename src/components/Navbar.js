import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-500 '>
        <div className='flex bg-green-500 justify-between p-6'>
        <NavLink to={"/"} className='font-bold '>Bank</NavLink >
        
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/register"}>Register</NavLink>
        
        </div>
    </div>
  )
}

export default Navbar
<<<<<<< HEAD
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../API/auth";
const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { mutate } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: () => loginUser(userInfo),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
    console.log(userInfo);
  };

  return (
    <div className="bg-blue-300 justify-center flex items-center h-[100vh]">
      <div className="border p-5 rounded-xl bg-white shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 ">
            <h1>Login</h1>
            <div>
              <label>Username: </label>
              <input
                id="username"
                type="name"
                name="username"
                className=""
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                className=""
                required
              />
            </div>

            <button type="submit" className="">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
=======
import React,{useState} from 'react'
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../API/auth';
import { Link } from 'react-router-dom';
const Login = () => {
    const [userInfo, setUserInfo] = useState({});
    const handleChange = (e)=>{
       setUserInfo((prev)=>({...prev,[e.target.name]:e.target.value}));
    }
    const {mutate} = useMutation({
        mutationKey:["loginUser"],
        mutationFn:()=>loginUser(userInfo)
        
        
    }) 
    const handleSubmit = (e)=>{
        e.preventDefault()
        mutate();
        console.log(userInfo);
        
    }
    
      return (
        <div className='bg-blue-300 justify-center flex items-center h-[100vh]'>
            <div className='border p-5 rounded-xl bg-white shadow-2xl'>
            <form onSubmit={handleSubmit}>
           <div className='flex flex-col gap-2 '>
           <h1 >Login</h1> 
           <div>
            <label>Username: </label>
           <input
           id='username'
           type='name'
           name='username'
           className=''
           onChange={handleChange} 
           required
           />
           </div>
           <div>
            <label>Password: </label>
           <input
            id='password'
            type="password"
            name="password"
           onChange={handleChange}
           className=''
           required
           />
           </div>
         
           <button
           
           type='submit'
           className=''>
            Login

           </button>
          
           </div>
           </form>
           </div>
           
        </div>
      );
>>>>>>> e0ea7c9350fa7f051fd6df4fea915dfe0549348a
};

export default Login;

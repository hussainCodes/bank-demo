import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../API/auth";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const [user,setUser ]= useContext(UserContext);
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { mutate } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: () => loginUser(userInfo),
    onSuccess:()=>{
      navigate("/")
      setUser(true);
    }
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
};

export default Login;

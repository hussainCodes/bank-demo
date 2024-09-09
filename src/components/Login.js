import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../API/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { mutate } = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: () => loginUser(userInfo),
    onSuccess: () => {
      navigate("/Home");
      setUser(true);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
    console.log(userInfo);
  };

  if (user) {
    return <Navigate to={"/Home"} />;
  }

  return (
    <div className="bg-white justify-center flex mt-10">
      <div className="border p-5 rounded-xl bg-white shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-lg font-semibold">Login:</h1>
            <div>
              <label>Username: </label>
              <input
                id="username"
                type="name"
                name="username"
                className="border rounded-sm"
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
                className="border rounded"
                required
              />
            </div>

            <button type="submit" className="bg-green-500 rounded-md">
              Login
            </button>
          </div>
        </form>
        <Link to={"/register"} className="text-red-500">
          Not user? register
        </Link>
      </div>
    </div>
  );
};

export default Login;

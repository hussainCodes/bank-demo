import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../API/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };
  const { mutate } = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: () => registerUser(userInfo),
    onSuccess: () => {
      navigate("/Home");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
    mutate();
  };

  return (
    <div className="bg-white justify-center flex items-center mt-10">
      <div className="border p-5 rounded-xl bg-white shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-lg font-semibold">Register:</h1>
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
                className="border rounded-sm"
                required
              />
            </div>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
            <button type="submit" className="bg-green-500 rounded-md">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

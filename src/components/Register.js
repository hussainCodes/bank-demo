import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../API/auth";
const Register = () => {
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "image") {
      setUser({ ...user, [e.target.name]: e.target.files[0] });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  const { mutate } = useMutation({
    mutationKey: ["registerUser"],
    mutationFn: () => registerUser(user),
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    mutate();
  };

  return (
    <div className="bg-blue-300 justify-center flex items-center h-[100vh]">
      <div className="border p-5 rounded-xl bg-white shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 ">
            <h1>Register</h1>
            <div>
              <label>Username: </label>
              <input
                id="username"
                type="name"
                name="username"
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
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              required
            />
            <button type="submit" className="">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

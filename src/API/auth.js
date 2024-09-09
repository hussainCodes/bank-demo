import { defaultShouldDehydrateQuery } from "@tanstack/react-query";
import instance from ".";
import { storeToken } from "./storage";
import { Await } from "react-router-dom";

const getUserById = async (userId) => {
  const { data } = await instance.get(`/mini-project/api/auth/user/${userId}`);
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const registerUser = async (userInfo) => {
  const formData = new FormData();
  for (const k in userInfo) formData.append(k, userInfo[k]);
  console.log(formData);
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  storeToken(data.token);
  return data;
};

const loginUser = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  storeToken(data.token);
  return data;
};

const getMyProfile = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};
const transfer = async (amount, username) => {
  const { data } = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    {
      amount: amount,
      username: username,
    }
  );
  return data;
};

const getMyTransactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};
const deposit = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/deposit",
    {
      amount: amount,
    }
  );
  return data;
};

const withdraw = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw",
    {
      amount: amount,
    }
  );
  return data;
};

const updateMyProfile = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await instance.put(
    "/mini-project/api/auth/profile",
    formData
  );
  return data;
};

export {
  getUserById,
  registerUser,
  loginUser,
  getAllUsers,
  getMyProfile,
  transfer,
  getMyTransactions,
  deposit,
  withdraw,
  updateMyProfile,
};

import instance from ".";

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
  return data;
};

const loginUser = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  return data;
};

export { getUserById, registerUser, loginUser, getAllUsers };

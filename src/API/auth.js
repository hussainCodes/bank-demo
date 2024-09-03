import instance from ".";

const getUserById = async (userId) => {
  const { data } = await instance.get(`/mini-project/api/auth/user/${userId}`);
  return data;
};

const registerUser = async (userName, image, password) => {
  const { data } = await instance.post("/mini-project/api/auth/register", {
    username: userName,
    image: image,
    password: password,
  });
  return data;
};

const loginUser = async (userName, password) => {
  const { data } = await instance.post("/mini-project/api/auth/login", {
    username: userName,
    image: image,
    password: password,
  });
  return data;
};

export { getUserById, registerUser, loginUser };

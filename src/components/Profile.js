import React, { useEffect } from "react";

import { getMyProfile } from "../API/auth";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getToken } from "../API/storage";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import instance from "../API";
const Profile = () => {
  // const [user, setUser] = useContext(UserContext);
  // const { id } = useParams();
  //const [userInfo, setUserInfo] = useState({});

  const { data: user } = useQuery({
    queryKey: "getMyProfile",
    queryFn: () => getMyProfile(),
  });
  console.log(user);

  // if (!user) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="flex justify-center items-center mt-20 w-80 rounded-2xl border  border-solid drop-shadow-lg">
          <div className="w-[75] h-80">
            <div>
              <img
                className="rounded-2xl"
                src={
                  "https://react-bank-project.eapi.joincoded.com/" + user.image
                }
                alt="profile picture"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1>{user.username}</h1>
              <h3>{user.balance}</h3>
              <input type="file" accept="image/*" />
              <button className="border rounded bg-green-400 pr-10 pl-10">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

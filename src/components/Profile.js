import React, { useEffect } from "react";

import { getMyProfile, updateMyProfile } from "../API/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getToken } from "../API/storage";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import instance from "../API";
import pic from "../assets/media/profile-pic-placeholder.png";
const Profile = () => {
  // const [user, setUser] = useContext(UserContext);
  // const { id } = useParams();
  //const [userInfo, setUserInfo] = useState({});
  const [photo, setPhoto] = useState(pic);
  const queryClient = useQueryClient();

  const onPhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const { data: user } = useQuery({
    queryKey: ["getMyProfile"],
    queryFn: () => getMyProfile(),
  });

  const { mutate } = useMutation({
    mutationKey: ["updateMyProfile"],
    mutationFn: () => updateMyProfile(photo),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: () => {
      alert("Error changing profile picture");
    },
  });

  const handleSaveButton = () => {
    mutate();
  };

  console.log("photo", photo);

  // if (!user) {
  //   return <Navigate to={"/login"} />;
  // }

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="flex  w-80 rounded-2xl border  border-dotted border-gray-400 drop-shadow-lg">
          <div className="w-[75] h-80">
            <div>
              <img
                className="rounded-2xl"
                src={
                  "https://react-bank-project.eapi.joincoded.com/" + user?.image
                }
                alt="profile picture"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1>Username: {user?.username}</h1>
              <h3>Balance: {user?.balance}</h3>
              <input onChange={onPhotoChange} type="file" accept="image/*" />
              <button
                onClick={handleSaveButton}
                className="border rounded bg-green-400 pr-10 pl-10"
              >
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

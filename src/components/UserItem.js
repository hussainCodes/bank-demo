import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUsers } from "../API/auth";
import TransferModal from "./TransferModal";
const UserItem = ({setShowModal}) => {
//   const [showModal, setShowModal] = useState(true);
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return (
    <>
      {users?.map((user) => {
        return (
          <div
            key={user.id}
            className="flex  justify-around items-center rounded-3xl   shadow-2xl w-[100vh] h-24 m-5"
          >
            <img
              src={
                "https://react-bank-project.eapi.joincoded.com/" + user.image
              }
              alt="user"
              className="self-center	h-20 w-20 rounded-full justify-start items-center"
            />

            <h3 className=" w-fit h-fit">{user.username}</h3>
            <h3 className=" w-fit h-fit">Balance: {user.balance}</h3>

            <button
              className="bg-green-500 p-4 rounded-2xl hover:bg-green-600 hover:scale-110 active:bg-green-700 active:scale-95"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Transfer
            </button>
          </div>
        );
      })}

    </>
  );
};

export default UserItem;

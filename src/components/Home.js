import React, { useContext } from "react";
import HomeButton from "./HomeButton";
import UserContext from "../Context/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="flex flex-col gap-5 mt-5 items-center">
        <div className="flex gap-5">
          <HomeButton name={"Account"} direction={"Account"} />
          <HomeButton name={"Transactions"} direction={"Transactions"} />
        </div>
        <div className="flex gap-5">
          <HomeButton name={"Profile"} direction={"Profile"} />
          <HomeButton name={"Users"} direction={"Users"} />
        </div>
      </div>
    </>
  );
};

export default Home;

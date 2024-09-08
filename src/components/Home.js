import React from "react";
import HomeButton from "./HomeButton";

const Home = () => {
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

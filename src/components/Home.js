import React from "react";
import HomeButton from "./HomeButton";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-5 items-center">
        <div className="flex gap-5">
          <HomeButton name={"Account"} />
          <HomeButton name={"Transactions"} />
        </div>
        <div className="flex gap-5">
          <HomeButton name={"Profile"} />
          <HomeButton name={"Users"} />
        </div>
      </div>
    </>
  );
};

export default Home;

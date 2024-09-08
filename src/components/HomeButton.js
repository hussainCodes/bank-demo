import React from "react";
import { Link } from "react-router-dom";

const HomeButton = ({ name, direction }) => {
  return (
    <div>
      <Link to={`/${direction}`}>
        <button className="w-60 h-60 bg-home-button opacity-60 text-2xl border border-gray-500 font-black drop-shadow-2xl hover:drop-shadow-none rounded-3xl text-green-600 hover:text-green-800">
          {name}
        </button>
      </Link>
    </div>
  );
};

export default HomeButton;

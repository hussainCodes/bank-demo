import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex justify-center mt-20 h-[100vh]">
        <div className="w-[75] border border-dashed h-80">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt="profile picture"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1>Name</h1>
            <h3>balance</h3>
            <input type="file" accept="image/*" />
            <button>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

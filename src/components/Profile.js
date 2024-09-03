import React from "react";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="bg-black">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt="profile picture"
          />
          <h1>Name</h1>
          <h3>balance</h3>
          <input type="file" accept="image/*" />
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default Profile;

import React from "react";
import "./Online.css";

function Online({ user }) {
  return (
    <li className="rightsidebarFriend">
      <div className="rightsidebarProfileImgContainer">
        <img
          className="rightsidebarProfileImg"
          src={user.profilePicture}
          alt=""
        />
        <span className="rightsidebarOnline"></span>
      </div>
      <span className="rightsidebarUsername">{user.username}</span>
    </li>
  );
}

export default Online;

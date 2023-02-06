import React from "react";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
import "./RightSideBar.css";

function RightSideBar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightsidebarAd" src="assets/ad.png" alt="" />
        <h4 className="rightsidebarTitle">Online Friends</h4>
        <ul className="rightsidebarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="rightsidebar">
      <div className="rightsidebarWrapper">
        {profile ? "" : <HomeRightbar />}
      </div>
    </div>
  );
}

export default RightSideBar;

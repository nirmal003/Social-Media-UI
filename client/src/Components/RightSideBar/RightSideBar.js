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

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightsidebarTitle">User information</h4>
        <div className="rightsidebarInfo">
          <div className="rightsidebarInfoItem">
            <span className="rightsidebarInfoKey">City:</span>
            <span className="rightsidebarInfoValue">New York</span>
          </div>
          <div className="rightsidebarInfoItem">
            <span className="rightsidebarInfoKey">From:</span>
            <span className="rightsidebarInfoValue">Madrid</span>
          </div>
          <div className="rightsidebarInfoItem">
            <span className="rightsidebarInfoKey">Relationship:</span>
            <span className="rightsidebarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightsidebarTitle">User friends</h4>
        <div className="rightsidebarFollowings">
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/1.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/2.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/3.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/4.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/5.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
          <div className="rightsidebarFollowing">
            <img
              src="assets/person/6.jpeg"
              alt=""
              className="rightsidebarFollowingImg"
            />
            <span className="rightsidebarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightsidebar">
      <div className="rightsidebarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default RightSideBar;

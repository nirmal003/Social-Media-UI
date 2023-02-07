import React from "react";
import HomeMainBar from "../../Components/HomeMainBar/HomeMainBar";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="profile">
        <LeftSideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <HomeMainBar />
            <RightSideBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

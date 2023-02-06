import React from "react";
import HomeMainBar from "../../Components/HomeMainBar/HomeMainBar";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import Navbar from "../../Components/Navbar/Navbar";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <LeftSideBar />
        <HomeMainBar />
        <RightSideBar />
      </div>
    </div>
  );
}

export default Home;

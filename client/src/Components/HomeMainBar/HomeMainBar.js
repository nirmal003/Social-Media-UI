import React from "react";
import { Posts } from "../../dummyData";
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./HomeMainBar.css";

function HomeMainBar() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default HomeMainBar;

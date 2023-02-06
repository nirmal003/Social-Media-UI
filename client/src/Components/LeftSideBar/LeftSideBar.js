import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from "@material-ui/icons";

import React from "react";
import { Users } from "../../dummyData";
import CloseFriend from "../CloseFriend/CloseFriend";
import "./LeftSideBar.css";

function LeftBar() {
  return (
    <div className="leftsidebar">
      <div className="leftsidebarWrapper">
        <ul className="leftsidebarList">
          <li className="leftsidebarListItem">
            <RssFeed className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Feed</span>
          </li>

          <li className="leftsidebarListItem">
            <Chat className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Chats</span>
          </li>

          <li className="leftsidebarListItem">
            <PlayCircleFilledOutlined className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Videos</span>
          </li>

          <li className="leftsidebarListItem">
            <Group className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Groups</span>
          </li>

          <li className="leftsidebarListItem">
            <Bookmark className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Bookmarks</span>
          </li>

          <li className="leftsidebarListItem">
            <HelpOutline className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Questions</span>
          </li>

          <li className="leftsidebarListItem">
            <WorkOutline className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Jobs</span>
          </li>

          <li className="leftsidebarListItem">
            <Event className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Events</span>
          </li>

          <li className="leftsidebarListItem">
            <School className="leftsidebarIcon" />
            <span className="leftsidebarListItemText">Courses</span>
          </li>
        </ul>

        <button className="leftsidebarButton">Show More</button>

        <hr className="leftsidebarHr" />

        <ul className="leftsidebarFriendList">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;

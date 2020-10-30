import React from "react";
import StoryReel from "./StoryReel";
import PostSender from "./PostSender";
import "./Feed.css";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <PostSender />
    </div>
  );
}

export default Feed;

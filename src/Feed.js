import React from "react";
import StoryReel from "./StoryReel";
import PostSender from "./PostSender";
import Post from "./Post";
import "./Feed.css";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <PostSender />
      <Post
        profilePic=""
        message="this works"
        username="Miguel"
        timestamp="timestamp"
        image="https://scontent.fmex14-1.fna.fbcdn.net/v/t1.0-9/123127773_10158986999581263_6281108861694173442_o.jpg?_nc_cat=1&ccb=2&_nc_sid=9267fe&_nc_ohc=ZrWsoh6ROmcAX-DmyeR&_nc_ht=scontent.fmex14-1.fna&oh=daf204bacb1e73333079ddf8aaa82604&oe=5FC034DC"
      ></Post>
      <Post
        profilePic=""
        message="this works"
        username="Miguel"
        timestamp="timestamp"
        image="https://scontent.fmex14-1.fna.fbcdn.net/v/t1.0-9/123127773_10158986999581263_6281108861694173442_o.jpg?_nc_cat=1&ccb=2&_nc_sid=9267fe&_nc_ohc=ZrWsoh6ROmcAX-DmyeR&_nc_ht=scontent.fmex14-1.fna&oh=daf204bacb1e73333079ddf8aaa82604&oe=5FC034DC"
      ></Post>
    </div>
  );
}

export default Feed;

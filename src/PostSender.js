import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./PostSender.css";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";

function PostSender() {
  const [input, setInput] = useState("");
  const [imgSrc, setimgSrc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(input);
    alert(imgSrc);
  };
  return (
    <div class="postSender">
      <div className="postSender__top">
        <Avatar src=""></Avatar>
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="postSender__input"
            type="text"
            placeHolder="What are you thinking?"
          ></input>
          <input
            value={imgSrc}
            onChange={(e) => {
              setimgSrc(e.target.value);
            }}
            type="text"
            placeholder="img src link (optional)"
          ></input>
          <button type="submit" onClick={handleSubmit}>
            hidden submit
          </button>
        </form>
      </div>
      <div className="postSender__bottom">
        <div className="postSender__option">
          <Videocam style={{ color: "red" }}></Videocam>
          <h3>Live Video</h3>
        </div>
        <div className="postSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/video</h3>
        </div>
        <div className="postSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling</h3>
        </div>
      </div>
    </div>
  );
}

export default PostSender;

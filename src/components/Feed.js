import React from "react";
import CreatePost from "./CreatePost";
import Feeling from "./Feeling";

const Feed = () => {
  return (
    <div className="w-[55%] border border-gray-200">
      <div>
        <CreatePost />
        <Feeling />
      </div>
    </div>
  );
};

export default Feed;

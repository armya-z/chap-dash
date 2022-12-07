import React from "react";
import PostList from "../components/posts/postList";

function PostCRUD() {
  return (
    <div className="grid grid-cols-1 justify-center rounded-xl shadow-lg m-20 p-10 border border-dotted border-gray-800">
      <PostList />
    </div>
  );
}

export default PostCRUD;

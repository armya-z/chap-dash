import React from "react";
import EditPostButton from "../Buttons/EditPostButton";
import DeletePostButton from "../Buttons/DeletePostButton";

function PostCard(props) {
  return (
    <div className="grid grid-cols-5 justify-items-center py-5">
      <figure>
        <img
          className="rounded"
          src={props.img}
          alt={props.alt}
        />
      </figure>

      <div className="col-span-4 text-center px-5">
        <h2 className="text-2xl py-1">{props.title}</h2>
        <h3 className="my-3">{props.author}</h3>
        <span className="grid grid-cols-2">
          <EditPostButton />
          <DeletePostButton />
        </span>
      </div>
    </div>
  );
}

export default PostCard;

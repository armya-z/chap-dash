import React from "react";

function EditPostButton(props) {
  return (
    <div>
      <button
        type="button"
        className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
      >
        Edit Post
      </button>
    </div>
  );
}

export default EditPostButton;

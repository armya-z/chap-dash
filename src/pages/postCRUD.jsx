import React from "react";
import PostList from "../components/posts/postList";
import SkillList from "../components/skills/skillList";
import TeamList from "../components/teamMember/TeamMemberList";

function PostCRUD() {
  return (
    <div>
      <TeamList />
      <PostList />
      <SkillList />
    </div>
  );
}

export default PostCRUD;

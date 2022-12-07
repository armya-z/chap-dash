import { Routes, Route } from "react-router-dom";

import PostCRUD from "../pages/postCRUD";
import HomePage from "../pages/HomePage";
import TeamMembers from "../pages/TeamMembers";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />{" "}
      <Route exact path="/skills" element={<Skills />} />
      <Route
        exact
        path="/team-members"
        element={<TeamMembers />}
      />
      <Route exact path="/posts" element={<PostCRUD />} />
      <Route
        exact
        path="/projects"
        element={<Projects />}
      />
    </Routes>
  );
};

export default AllRoutes;

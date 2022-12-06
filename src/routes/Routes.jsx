import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import PostCRUD from "../pages/postCRUD";
import HomePage from "../pages/HomePage";
import Projects from "../pages/Projects";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/posts" element={<PostCRUD />} />
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/projects"
          element={<Projects />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import PostCRUD from "../pages/postCRUD";
import HomePage from "../pages/HomePage";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/posts" element={<PostCRUD />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;

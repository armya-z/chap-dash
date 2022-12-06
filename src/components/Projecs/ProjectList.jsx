import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjectFetch } from "../../features/Projects/ProjectsSlice";

function ProjectList() {
  const projects = useSelector(
    (state) => state.project.projects
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectFetch());
  }, [dispatch]);

  return (
    <div>
      <h1>Project</h1>
      <ul>
        {projects.map((project) => (
          <section key={project.id}>
            <li>{project.name}</li>
            <p>{project.about}</p>
            <li>{project.stack}</li>
          </section>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;

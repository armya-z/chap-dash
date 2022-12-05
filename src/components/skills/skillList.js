import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSkillsFetch } from "../../features/skills/skillState";

function SkillList() {
  const skills = useSelector((state) => state.skill.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkillsFetch());
  }, [dispatch]);
  console.log(skills);

  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <div key={skill.id}>
            <li>{skill.skill}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SkillList;

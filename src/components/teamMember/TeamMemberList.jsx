import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTeamsFetch } from "../../features/team/teamSlice";

function TeamList() {
  const teams = useSelector((state) => state.team.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeamsFetch());
  }, [dispatch]);

  return (
    <div>
      <h1>hi there</h1>
      <section>
        <ul>
          {teams.map((team) => (
            <div key={team.id}>
              <li>
                {team.fname}

                {team.lname}
              </li>
              <p>{team.bio}</p>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TeamList;

import { call, put, takeEvery } from "redux-saga/effects";
import { getTeamsSuccess } from "./teamSlice";

function* workGetTeamsFetch() {
  const teams = yield call(() =>
    fetch(
      "https://6388fd27d94a7e5040ac11b7.mockapi.io/api/v2/team"
    )
  );
  const formattedTeams = yield teams.json();
  yield put(getTeamsSuccess(formattedTeams));
}

function* teamSaga() {
  yield takeEvery("team/getTeamsFetch", workGetTeamsFetch);
}

export default teamSaga;

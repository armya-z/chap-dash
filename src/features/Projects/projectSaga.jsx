import { call, put, takeEvery } from "redux-saga/effects";
import { getProjectSuccess } from "../Projects/ProjectsSlice";

function* workGetProjectFetch() {
  const projects = yield call(() =>
    fetch(
      "https://6388fd27d94a7e5040ac11b7.mockapi.io/api/v2/projects"
    )
  );
  const formattedProject = yield projects.json();
  yield put(getProjectSuccess(formattedProject));
}
function* projecSaga() {
  yield takeEvery(
    "project/getProjectFetch",
    workGetProjectFetch
  );
}

export default projecSaga;

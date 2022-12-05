import { call, put, takeEvery } from "redux-saga/effects";
import { getSkillsSuccess } from "./skillState";

function* workGetskillsFetch() {
  const skills = yield call(() =>
    fetch(
      "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/skills"
    )
  );
  const formattedSkills = yield skills.json();
  yield put(getSkillsSuccess(formattedSkills));
}

function* skillSaga() {
  yield takeEvery(
    "skill/getSkillsFetch",
    workGetskillsFetch
  );
}
export default skillSaga;

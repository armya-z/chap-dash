import { all, fork } from "redux-saga/effects";
import postSaga from "./posts/postSaga";
import skillSaga from "./skills/skillSaga";
import teamSaga from "./team/teamSaga";

export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(skillSaga),
    fork(teamSaga),
  ]);
}

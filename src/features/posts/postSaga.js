import { call, put, takeEvery } from "redux-saga/effects";
import { getPostsSuccess } from "./postState";

function* workGetPostsFetch() {
  const posts = yield call(() =>
    fetch(
      "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/posts"
    )
  );
  const formattedPosts = yield posts.json();
  yield put(getPostsSuccess(formattedPosts));
}

function* postSaga() {
  yield takeEvery("post/getPostsFetch", workGetPostsFetch);
}

export default postSaga;

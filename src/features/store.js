import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postState";
import SkillsReducer from "./skills/skillState";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    post: postsReducer,
    skill: SkillsReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);

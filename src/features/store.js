import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/postState";
import SkillsReducer from "./skills/skillState";
import teamReducer from "./team/teamSlice";
import projectReducer from "./Projects/ProjectsSlice";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

export default configureStore({
  reducer: {
    post: postsReducer,
    skill: SkillsReducer,
    team: teamReducer,
    project: projectReducer,
  },
  middleware: [saga],
});
saga.run(rootSaga);

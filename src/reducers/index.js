import { combineReducers } from "redux";
import postReducers from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postReducers,
  users: usersReducer,
});

import { combineReducers } from "redux";
 import RepoReducer from './RepoReducer';

const rootReducer = combineReducers({
  repo:RepoReducer,
});

export default rootReducer;
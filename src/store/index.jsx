import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./users-service/reducer";

const rootReducer = combineReducers({
  usersAll: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mainSlice from "./slicers/mainSlice";

const combinedReducer = combineReducers({
  mainSlice,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});

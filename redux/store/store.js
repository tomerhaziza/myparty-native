import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Reducers:
import reducer from "../reducers/reducer";

const rootReducer = combineReducers({
  reducer,
});

const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import { updateFavoritesListInStorage } from "../../utils/setAsyncStorage";
import { fetchAllEvents, fetchFavoritesList } from "../asyncThunk";

// User initial state
const initialState = {
  events: [],
  favoritesList: [],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    updateFavoritesList(state, action) {
      state.favoritesList = action.payload;
      updateFavoritesListInStorage(action.payload);
    },
  },

  // Reducers for async actions
  extraReducers: {
    [fetchAllEvents.fulfilled]: (state, action) => {
      state.events = action.payload;
    },
    [fetchFavoritesList.fulfilled]: (state, action) => {
      state.favoritesList = action.payload;
    },
  },
});

// Export actions under reducers
export const { updateFavoritesList } = eventsSlice.actions;
export default eventsSlice.reducer;

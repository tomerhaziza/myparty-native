import { createSlice } from "@reduxjs/toolkit";
import { fetchAllEvents } from "../asyncThunk";

// User initial state
const initialState = {
  eventsList: [],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    // updateLoginStatus(state, action) {
    //   state.user = action.payload;
    // },
  },

  // Reducers for async actions
  extraReducers: {
    [fetchAllEvents.fulfilled]: (state, action) => {
      state.eventsList = action.payload;
    },
    // [fetchAddNewEvent.fulfilled]: (state, action) => {
    //   const newEvent = action.payload;
    //   const newEventsList = [newEvent, ...state.events];
    //   state.events = newEventsList;
    // },
    // [updateEventById.fulfilled]: (state, action) => {
    //   const newEventsList = [...state.events];
    //   const { eventId, updatedEventData } = action.payload;
    //   const eventToUpdateIndex = newEventsList.findIndex(
    //     (event) => event.id === eventId
    //   );
    //   Object.entries(updatedEventData).forEach((prop) => {
    //     newEventsList[eventToUpdateIndex][prop[0]] = prop[1];
    //   });
    //   state.events = newEventsList;
    // },
    // [fetchRemoveEventById.fulfilled]: (state, action) => {
    //   const eventToRemoveIndex = state.events.findIndex(
    //     (item) => item.id.toString() === action.payload.toString()
    //   );
    //   if (eventToRemoveIndex >= 0) {
    //     const newEventsList = [...state.events];
    //     newEventsList.splice(eventToRemoveIndex, 1);
    //     state.events = newEventsList;
    //   }
    // },
  },
});

// Export actions under reducers
export const {} = eventsSlice.actions;
export default eventsSlice.reducer;

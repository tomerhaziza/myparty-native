import { createAsyncThunk } from "@reduxjs/toolkit";
// import { createNewUser, loginUser, logoutUser } from "../api/apiUser";
import {
  //   apiAddNewEvent,
  //   apiDeleteEventById,
  apiGetAllEvents,
  //   apiupdateEventById,
} from "../api/eventsApi";

export const fetchAllEvents = createAsyncThunk(
  "events/fetchAllEvents",
  async () => {
    const allEvents = await apiGetAllEvents();
    return allEvents;
  }
);

// export const fetchAddNewEvent = createAsyncThunk(
//   "events/fetchAddNewEvent",
//   async (eventData) => {
//     const response = await apiAddNewEvent(eventData);
//     const newEventData = { id: response.id, ...eventData };
//     return newEventData;
//   }
// );

// export const updateEventById = createAsyncThunk(
//   "events/updateEventById",
//   async (payload) => {
//     const { updatedEventData, eventId } = payload;
//     const response = await apiupdateEventById(updatedEventData, eventId);
//     const newEventData = {
//       eventId: payload.eventId,
//       updatedEventData: payload.updatedEventData,
//     };
//     return newEventData;
//   }
// );

// export const fetchRemoveEventById = createAsyncThunk(
//   "events/fetchRemoveEventById",
//   async (eventId) => {
//     const response = await apiDeleteEventById(eventId);
//     return eventId;
//   }
// );

// export const fetchCreateNewUser = createAsyncThunk(
//   "user/fetchCreateNewUser",
//   async (payload) => {
//     const { email, password } = payload;
//     return await createNewUser(email, password);
//   }
// );

// export const fetchLoginUser = createAsyncThunk(
//   "user/fetchLoginUser",
//   async (payload) => {
//     const { email, password } = payload;
//     return await loginUser(email, password);
//   }
// );

// export const fetchLogout = createAsyncThunk(
//   "user/fetchLogout",
//   async (payload) => {
//     return await logoutUser();
//   }
// );

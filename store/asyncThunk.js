import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetAllEvents } from "../api/eventsApi";
import { fetchFavoritesListFromStorage } from "../utils/setAsyncStorage";

export const fetchAllEvents = createAsyncThunk(
  "events/fetchAllEvents",
  async () => {
    return await apiGetAllEvents();
  }
);

export const fetchFavoritesList = createAsyncThunk(
  "events/fetchFavoritesList",
  async () => {
    return await fetchFavoritesListFromStorage();
  }
);

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const accountSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
});

export const {} = accountSlice.actions;

export default accountSlice.reducer;

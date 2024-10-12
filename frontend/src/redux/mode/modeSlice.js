import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setModeSuccess: (state, action) => {
      state.mode = action.payload ? "dark" : "light";
    },
  },
});

export const { setModeSuccess } = modeSlice.actions;

export default modeSlice.reducer;

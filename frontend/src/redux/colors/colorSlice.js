import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    getColorsSuccess: (state, action) => {
      state.colors = action.payload;
    },
  },
});

export const { getColorsSuccess } = colorSlice.actions;

export default colorSlice.reducer;

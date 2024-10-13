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
    createColorSuccess: (state, action) => {
      state.colors.push(action.payload);
    },
    deleteColorSuccess: (state, action) => {
      state.colors = state.colors.filter(
        (color) => color.id !== parseInt(action.payload?.color_id)
      );
      console.log(state.colors);
      console.log(action.payload);
    },
  },
});

export const { getColorsSuccess, createColorSuccess, deleteColorSuccess } =
  colorSlice.actions;

export default colorSlice.reducer;

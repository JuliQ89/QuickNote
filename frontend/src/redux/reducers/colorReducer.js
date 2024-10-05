import { SET_COLORS } from "../types";

export const colorData = (data = [], action) => {
  switch (action.type) {
    case SET_COLORS:
      console.log("reducer called", action);
      return action.data;
    default:
      return [];
  }
};

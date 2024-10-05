import { GET_COLORS } from "../types";

export const getColorsAction = (data) => {
  return {
    type: GET_COLORS,
    data,
  };
};

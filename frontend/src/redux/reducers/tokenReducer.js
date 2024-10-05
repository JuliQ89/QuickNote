import { SET_TOKENS } from "../types";
import { jwtDecode } from "jwt-decode";

const initialState = {
  user: null,
  tokens: {},
};

export const tokenData = (data = initialState, action) => {
  switch (action.type) {
    case SET_TOKENS:
      console.log("reducer token", action);
      return {
        ...data,
        user: jwtDecode(action.data.access),
        tokens: action.data,
      };
    default:
      return initialState;
  }
};

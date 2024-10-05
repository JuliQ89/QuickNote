import { GET_TOKENS } from "../types";

export const getTokenAction = (payload) => {
  return {
    type: GET_TOKENS,
    payload,
  };
};

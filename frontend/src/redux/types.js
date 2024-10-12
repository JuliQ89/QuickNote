export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const register = (payload) => ({
  type: REGISTER,
  payload,
});

export const GET_COLORS = "GET_COLORS";

export const getColors = () => ({
  type: GET_COLORS,
});

export const GET_NOTES = "GET_NOTES";
export const CREATE_NOTE = "CREATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const getNotes = () => ({
  type: GET_NOTES,
});

export const createNote = (payload) => ({
  type: CREATE_NOTE,
  payload,
});

export const deleteNote = (payload) => ({
  type: DELETE_NOTE,
  payload,
});

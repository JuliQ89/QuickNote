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
export const CREATE_COLOR = "CREATE_COLOR";
export const DELETE_COLOR = "DELETE_COLOR";

export const getColors = () => ({
  type: GET_COLORS,
});

export const createColor = (payload) => ({
  type: CREATE_COLOR,
  payload,
});

export const deleteColor = (payload) => ({
  type: DELETE_COLOR,
  payload,
});

export const GET_NOTES = "GET_NOTES";
export const CREATE_NOTE = "CREATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";

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

export const updateNote = (payload) => ({
  type: UPDATE_NOTE,
  payload,
});

export const GET_MODE = "GET_MODE";
export const UPDATE_MODE = "UPDATE_MODE";

export const getMode = () => ({
  type: GET_MODE,
});

export const updateMode = (payload) => ({
  type: UPDATE_MODE,
  payload,
});

export const GET_WHITEBOARD = "GET_WHITEBOARD";
export const UPDATE_WHITEBOARD = "UPDATE_WHITEBOARD";

export const getWhiteBoard = () => ({
  type: GET_WHITEBOARD,
});

export const updateWhiteBoard = (payload) => ({
  type: UPDATE_WHITEBOARD,
  payload,
});

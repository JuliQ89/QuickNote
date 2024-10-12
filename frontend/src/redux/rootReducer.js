import { combineReducers } from "redux";

import authReducer from "./auth/authSlice";
import colorReducer from "./colors/colorSlice";
import modeReducer from "./mode/modeSlice";
import noteReducer from "./notes/noteSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  color: colorReducer,
  mode: modeReducer,
  note: noteReducer,
});

export default rootReducer;

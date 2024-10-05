import { combineReducers } from "redux";

import { colorData } from "./reducers/colorReducer";
import { tokenData } from "./reducers/tokenReducer";

const rootReducer = combineReducers({
  colorData,
  tokenData,
});

export default rootReducer;

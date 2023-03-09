import { combineReducers } from "redux";
import { charReducer } from "./charReducer";


const reducer = combineReducers({
  charReducer: charReducer

});

export default reducer;
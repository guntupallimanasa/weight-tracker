import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import settingsUserDataReducer from "./settingsUserDataReducer";
import enteredVAluesReducer from "./enteredValuesReducer";
import getUsernameReducer from "./getUsernameReducer";
import fetchTimeReducer from "./fetchTimeReducer";

const rootReducer = combineReducers({
    LoginReducer,
    settingsUserDataReducer,
    enteredVAluesReducer,
    getUsernameReducer,
    fetchTimeReducer
});

export default rootReducer;
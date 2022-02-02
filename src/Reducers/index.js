import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import settingsUserDataReducer from "./settingsUserDataReducer";
import enteredVAluesReducer from "./enteredValuesReducer";
import getUsernameReducer from "./getUsernameReducer";

const rootReducer = combineReducers({
    LoginReducer,
    settingsUserDataReducer,
    enteredVAluesReducer,
    getUsernameReducer
});

export default rootReducer;
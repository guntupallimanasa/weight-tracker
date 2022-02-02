import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import settingsUserDataReducer from "./settingsUserDataReducer";
import enteredVAluesReducer from "./enteredValuesReducer";

const rootReducer = combineReducers({
    LoginReducer,
    settingsUserDataReducer,
    enteredVAluesReducer
});

export default rootReducer;
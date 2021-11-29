import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import LoginReducer from "./loginReducer";

const rootReducer = combineReducers({
    CounterReducer,
    LoginReducer
});

export default rootReducer;
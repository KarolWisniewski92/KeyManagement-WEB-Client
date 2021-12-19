import { combineReducers } from "redux";
import user from './user.reducer';
import main from "./main.reducer";

const rootReducer = combineReducers({
    user,
    main
});

export default rootReducer;
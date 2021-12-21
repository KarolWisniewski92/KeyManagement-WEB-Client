import { combineReducers } from "redux";
import user from './user.reducer';
import main from './main.reducer';
import data from './data.reducer';

const rootReducer = combineReducers({
    user,
    main,
    data
});

export default rootReducer;
import {
    combineReducers
} from "redux";
import user from './user.reducer';
import main from './main.reducer';
import data from './data.reducer';
import notification from './notification.reducer';

const rootReducer = combineReducers({
    user,
    main,
    data,
    notification
});

export default rootReducer;
const { USER_GET } = require("Data/constans");

const initialState = {
    user: {}

}

function user(state = initialState, action) {
    switch (action.type) {
        case USER_GET:
            return {
                ...state,
                user: action.payload

            }

        default:
            return state;
    }

}

export default user;
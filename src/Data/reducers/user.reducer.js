const { USER_LOGGED } = require("Data/constans");

const initialState = {
    user: {
    }

}

function user(state = initialState, action) {

    switch (action.type) {
        case USER_LOGGED:
            return {
                ...state,
                user: action.payload

            }

        default:
            return state;
    }

}

export default user;
const { ACTIVE_KEYS } = require("Data/constans");

const initialState = {
    keys: []

}

function data(state = initialState, action) {

    switch (action.type) {
        case ACTIVE_KEYS:
            return {
                ...state,
                keys: action.payload
            }

        default:
            return state;
    }

}

export default data;
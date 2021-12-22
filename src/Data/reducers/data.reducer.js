const { ACTIVE_KEYS, MY_KEYS } = require("Data/constans");

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

        case MY_KEYS:
            return {
                ...state,
                myKeys: action.payload
            }

        default:
            return state;
    }

}

export default data;
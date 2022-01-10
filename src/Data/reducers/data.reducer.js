const { ACTIVE_KEYS, MY_KEYS, TRANSFERED_TO_ME } = require("Data/constans");

const initialState = {
    keys: [],
    myKeys: [],
    keysTransferedToMe: []

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

        case TRANSFERED_TO_ME:
            return {
                ...state,
                keysTransferedToMe: action.payload
            }

        default:
            return state;
    }

}

export default data;
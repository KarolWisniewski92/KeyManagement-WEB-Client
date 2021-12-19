const { SELECTED_SET } = require("Data/constans");

const initialState = {
    selected_set: "KP"

}

function main(state = initialState, action) {

    switch (action.type) {
        case SELECTED_SET:
            return {
                ...state,
                selected_set: action.payload

            }

        default:
            return state;
    }

}

export default main;
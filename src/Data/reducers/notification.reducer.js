const {
    ADD_NOTIFICATION,
    REMOVE_NOTIFICATION
} = require("Data/constans");

const initialState = {
    notification: []
}

function main(state = initialState, action) {

    switch (action.type) {
        case ADD_NOTIFICATION:
            
            return {
                ...state,
                notification: [...state.notification, action.payload]
            }
            case REMOVE_NOTIFICATION:

                const newArray = state.notification.filter(el => {
                    if (el.type === action.payload.type && el.title === action.payload.title && el.message === action.payload.message) {
                        return null
                    } else {
                        return el
                    }
                })

                return {
                    ...state,
                    notification: [...newArray]
                }
                default:
                    return state;
    }

}

export default main;
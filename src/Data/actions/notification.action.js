const {
    ADD_NOTIFICATION,
    REMOVE_NOTIFICATION
} = require("Data/constans");



export const addNotification = (dispatch, notification) => {

    dispatch({
        type: ADD_NOTIFICATION,
        payload: notification
    })

};
export const removeNotification = (dispatch, notification) => {

    dispatch({
        type: REMOVE_NOTIFICATION,
        payload: notification
    })

};
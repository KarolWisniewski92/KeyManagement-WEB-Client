const { ACTIVE_KEYS, MY_KEYS, TRANSFERED_TO_ME } = require("Data/constans");

export const activeKeys = (dispatch, keys) => {

    dispatch({
        type: ACTIVE_KEYS,
        payload: keys
    })

}

export const myKeys = (dispatch, keys) => {
    dispatch({
        type: MY_KEYS,
        payload: keys
    })
}

export const keysTransferedToMe = (dispatch, keys) => {
    dispatch({
        type: TRANSFERED_TO_ME,
        payload: keys
    })
}
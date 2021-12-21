const { ACTIVE_KEYS } = require("Data/constans");

export const activeKeys = (dispatch, keys) => {

    dispatch({
        type: ACTIVE_KEYS,
        payload: keys
    })

}
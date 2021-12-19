const { SELECTED_SET } = require("Data/constans");

export const selectSet = (dispatch, set) => {

    dispatch({
        type: SELECTED_SET,
        payload: set
    })

}
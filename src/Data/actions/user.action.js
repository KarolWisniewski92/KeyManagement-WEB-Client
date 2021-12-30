import API from '../fetch'
import { USER_LOGGED } from '../constans'

export const fetchUser = () => async (dispatch) => {

    const response = await API.authentication.checkUser()
    const user = await response.json();
    
    dispatch({
        type: USER_LOGGED,
        payload: user
    })
}

export const logoutUser = (dispatch) => {

    dispatch({
        type: USER_LOGGED,
        payload: {}
    })

}

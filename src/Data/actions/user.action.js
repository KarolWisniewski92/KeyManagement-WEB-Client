import API from '../fetch'
import { USER_GET } from '../constans'

export const fetchUser = () => {
    const promise = API.authentication.checkUser()

    return ({
        type: USER_GET,
        promise
    })

}
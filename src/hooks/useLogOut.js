import {
    useHistory
} from "react-router";
import API from '../Data/fetch';
import {
    useDispatch
} from "react-redux";
import {
    logoutUser
} from '../Data/actions/user.action'


function useLogOut() {

    let history = useHistory();
    const dispatch = useDispatch();

    const logOut = () => {

        API.authentication.fetchLogOut()
            .then(() => {
                history.push("/");
                logoutUser(dispatch);
            })
            .catch((err) => {
                throw err;
            })
    }

    return ({
        logOut
    })
}
export default useLogOut;
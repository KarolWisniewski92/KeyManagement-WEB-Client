import { useHistory } from "react-router";
import API from '../Data/fetch';
import { useDispatch } from "react-redux";
import { logoutUser } from '../Data/actions/user.action'


function useLogOut(friendID) {
    console.log(`test`)

    let history = useHistory();
    const dispatch = useDispatch();

    const logOut = () => {

        API.authentication.fetchLogOut()
            .then(() => {
                logoutUser(dispatch);
                history.push("/");
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
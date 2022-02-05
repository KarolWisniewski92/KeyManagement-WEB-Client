import API from '../Data/fetch';
import useLogOut from './useLogOut';
import {
    useSelector
} from 'react-redux';

function useIsLogged() {

    const logout = useLogOut();
    const localyUserData = useSelector(state => state.user.user);

    console.log(localyUserData)

    const isLogged = () => {
        API.authentication.checkUser()
            .then(response => response.json())
            .then(data => { //Jeżeli użytkownik nie jest zalogowany po stronie serwera to wylogowywuje go po stronie frontu. Czyści informacje w redux.
                if (Object.keys(data).length === 0 & Object.keys(data).length !== 0) {
                    logout.logOut();
                    console.log(`test`);
                    debugger
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return ({
        isLogged
    })
}
export default useIsLogged;
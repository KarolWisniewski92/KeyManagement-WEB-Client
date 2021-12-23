import { useEffect } from 'react';
import { connect } from 'react-redux';
import API from '../../Data/fetch'
import { useHistory } from "react-router-dom";
import { fetchUser } from 'Data/actions/user.action';
import { KeyBox, UserBox } from './components';
import { DashboardBody } from './Dashboard.css';
import useKeyAction from 'hooks/useKeyAction';

const Dashboard = ({ user, selectedSet, fetchUser }) => {

    let history = useHistory();
    const keyActions = useKeyAction();

    //Pobieramy dane kluczy dla aktualnie wybranego setu.
    useEffect(() => {
        keyActions.getKeysData();
    }, [keyActions, selectedSet]);

    //Pobieramy klucze przypisane do aktualnie zalogowanego użytkownika.
    useEffect(() => {
        keyActions.getMyKeysData();
    }, [keyActions, user.user_id])


    //Sprawdzamy czy użytkownik jest nadal zalogowany po stronie serwera.
    useEffect(() => {

        API.authentication.checkUser()
            .then(response => response.json())
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    fetchUser()
                    history.push("/");
                }
            })
    }, [history, fetchUser]);


    return (
        <DashboardBody>
            <KeyBox>
            </KeyBox>
            <UserBox></UserBox>
        </DashboardBody>
    )
}



export default connect((state) => {
    return ({
        user: state.user.user,
        selectedSet: state.main.selected_set
    })
}, { fetchUser })(Dashboard);
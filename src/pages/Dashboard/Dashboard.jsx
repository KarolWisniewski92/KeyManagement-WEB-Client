import { useEffect } from 'react';
import { connect } from 'react-redux';
import API from '../../Data/fetch'
import { useHistory } from "react-router-dom";
import { fetchUser } from 'Data/actions/user.action';
import { KeyBox, UserBox } from './components';
import { DashboardBody } from './Dashboard.css';
import { fetchKeysData, fetchMyKeysData } from 'Data/fetch/data.fetch';
import { activeKeys } from 'Data/actions/data.action';
import { useDispatch } from 'react-redux';

const Dashboard = ({ user, changeUserData, selectedSet, fetchUser }) => {

    let history = useHistory();
    const dispatch = useDispatch();

    //Pobieramy dane kluczy dla aktualnie wybranego setu.
    useEffect(() => {
        fetchKeysData(selectedSet)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                activeKeys(dispatch, data);
            })
    }, [selectedSet]);

    useEffect(() => {
        fetchMyKeysData(user.user_id)
    }, [user.user_id])


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
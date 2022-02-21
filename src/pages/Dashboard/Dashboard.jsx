import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import API from '../../Data/fetch'
import { useHistory } from "react-router-dom";
import { setUserInStore } from 'Data/actions/user.action';
import { KeyBox, UserBox } from './components';
import { DashboardBody } from './Dashboard.css';
import useKeyAction from 'hooks/useKeyAction';
import { Modal, NotificationBox } from './../../components';

const Dashboard = ({ user, selectedSet, setUserInStore }) => {

    let history = useHistory();
    const keyActions = useKeyAction();
    const notification = useSelector(state => state.notification.notification)

    //Pobieramy dane kluczy dla aktualnie wybranego setu.
    useEffect(() => {
        keyActions.getKeysData();
    }, [keyActions, selectedSet]);

    //Pobieramy klucze przypisane do aktualnie zalogowanego użytkownika.
    useEffect(() => {
        keyActions.getMyKeysData();
    }, [keyActions, user.user_id])

    //Pobieramy klucze przekazywane do aktualnie zalogowanego użytkownika.
    useEffect(() => {
        keyActions.getKeysTransferedToMe();
    }, [keyActions, user.user_id])

    //Sprawdzamy czy użytkownik jest nadal zalogowany po stronie serwera.
    useEffect(() => {

        API.authentication.checkUser()
            .then(response => response.json())
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    setUserInStore()
                    history.push("/");
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [history, setUserInStore]);

    const showNotification = (() => {
        const notificationList = notification.map(el => {
            return <NotificationBox type={el.type} title={el.title} message={el.message} />
        })

        if (notification.length > 0) {
            return <Modal>{notificationList}</Modal>
        }
    })();

    return (
        <DashboardBody>
            {showNotification}
            <KeyBox></KeyBox>
            <UserBox></UserBox>
        </DashboardBody>
    )
}



export default connect((state) => {
    return ({
        user: state.user.user,
        selectedSet: state.main.selected_set
    })
}, { setUserInStore })(Dashboard);
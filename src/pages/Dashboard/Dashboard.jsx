import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import API from '../../Data/fetch'
import { useHistory } from "react-router-dom";
import { fetchUser } from 'Data/actions/user.action';
import { KeyBox, UserBox } from './components';
import useLogOut from 'hooks/useLogOut';
import { DashboardBody } from './Dashboard.css';

const Dashboard = ({ user, changeUserData, fetchUser }) => {

    let history = useHistory();

    useEffect(() => {
        API.authentication.checkUser()
            .then(response => response.json())
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    fetchUser()
                    history.push("/");
                }
            })
    }, [history])


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
        state: state.user.user
    })
}, { fetchUser })(Dashboard);
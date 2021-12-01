import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import API from '../../Data/fetch'
import { useHistory } from "react-router-dom";
import { fetchUser } from 'Data/actions/user.action';
import { KeyBox, UserBox } from './components';

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
        <Fragment>
            <KeyBox></KeyBox>
            <UserBox></UserBox>
        </Fragment>
    )
}



export default connect(state => {
    return {
        user: state.user
    }
}, { fetchUser })(Dashboard);
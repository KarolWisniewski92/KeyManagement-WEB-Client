import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import API from '../../Data/fetch'
import { useHistory } from "react-router-dom";
import { fetchUser } from 'Data/actions/user.action';
import { KeyBox, UserBox } from './components';
import useLogOut from 'hooks/useLogOut';

const Dashboard = ({ user, changeUserData, fetchUser }) => {

    let history = useHistory();

    let logout = useLogOut();
    console.log(logout);


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
            <button onClick={() => { logout.logOut() }}>Test</button>
            <KeyBox>
            </KeyBox>
            <UserBox></UserBox>
        </Fragment>
    )
}



export default connect((state) => {
    return ({
        state: state.user.user
    })
}, { fetchUser })(Dashboard);
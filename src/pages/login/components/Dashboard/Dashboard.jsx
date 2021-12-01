import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import API from '../../../../Data/fetch'
import { useHistory } from "react-router-dom";
import { fetchUser } from 'Data/actions/user.action';

const Dashboard = ({ user, changeUserData, fetchUser }) => {

    let history = useHistory();


    useEffect(() => {
        API.authentication.checkUser()
            .then(response => response.json())
            .then((data) => {
                if (Object.keys(data).length === 0) {
                    history.push("/");
                }
            })
    }, [history])


    return (
        <Fragment>
            <div>Witaj {user.user.name} {user.user.surname}</div>
            <button onClick={() => {
                changeUserData({
                    name: "Tom",
                    surname: "Inny",
                    age: 50
                });
            }}>Test</button>
            <button onClick={() => {
                fetchUser()
            }} >Test 2</button>
        </Fragment>
    )
}



export default connect(state => {
    return {
        user: state.user
    }
}, { fetchUser })(Dashboard);
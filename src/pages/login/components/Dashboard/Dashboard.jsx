import { useEffect } from 'react';
import API from '../../../../Data/Fetch'
import { useHistory } from "react-router-dom";

const Dashboard = () => {

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
        <div>Witaj</div>
    )
}

export default Dashboard;
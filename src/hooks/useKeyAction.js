import API from '../Data/fetch';
import { useSelector, useDispatch } from 'react-redux';
import { fetchKeysData } from 'Data/fetch/data.fetch';
import { activeKeys } from 'Data/actions/data.action';
import { fetchMyKeysData } from 'Data/fetch/data.fetch';
import { myKeys } from 'Data/actions/data.action';

function useKeyAction() {

    const user = useSelector(state => state.user.user);
    const selectedSet = useSelector(state => state.main.selected_set);
    const dispatch = useDispatch();

    const dateNow = new Date();
    const date = `${dateNow.getDate()}.${dateNow.getMonth() + 1}.${dateNow.getFullYear()}`


    const getKeysData = () => {
        fetchKeysData(selectedSet)
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                activeKeys(dispatch, data);
            })
    }

    const getMyKeysData = () => {
        fetchMyKeysData(user.user_id)
            .then(response => response.json())
            .then(data => {
                myKeys(dispatch, data)
            })
    }


    const getKey = (keyID) => {
        const dataToUpdate = {
            keyID: keyID,
            isTakenBy: user.user_id,
            isTaken: true,
            isTakenData: date
        }

        API.data.fetchIsTakenByUpdate(dataToUpdate)
            .then(response => response.json())
            .then(data => {
                getKeysData();
                getMyKeysData();
            })
            .catch((err) => {
                throw err;
            })
    }

    const returnKey = (keyID) => {
        const dataToUpdate = {
            keyID: keyID,
            isTakenBy: "",
            isTaken: false,
            isTakenData: ""
        }

        API.data.fetchIsTakenByUpdate(dataToUpdate)
            .then(response => response.json())
            .then(data => {
                getKeysData();
                getMyKeysData();
            })
            .catch((err) => {
                throw err;
            })
    }


    return ({
        getKeysData,
        getMyKeysData,
        getKey,
        returnKey
    })
}

export default useKeyAction;


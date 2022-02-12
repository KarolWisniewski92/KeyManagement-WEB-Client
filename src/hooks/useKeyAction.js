import API from '../Data/fetch';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    fetchKeysData
} from 'Data/fetch/data.fetch';
import {
    activeKeys,
    keysTransferedToMe
} from 'Data/actions/data.action';
import {
    fetchMyKeysData,
    fetchIsTransferedToUpdate
} from 'Data/fetch/data.fetch';
import {
    myKeys
} from 'Data/actions/data.action';

function useKeyAction() {

    const user = useSelector(state => state.user.user);
    const selectedSet = useSelector(state => state.main.selected_set);
    const dispatch = useDispatch();

    const dateNowJSON = new Date().toJSON();

    const compareDate = (dateA, dateB) => {
        const dateToCompareA = new Date(dateA.isTakenData);
        const dateToCompareB = new Date(dateB.isTakenData);
        return dateToCompareA - dateToCompareB
    }

    //Get all keys in selected set.
    const getKeysData = () => {
        fetchKeysData(selectedSet)
            .then(response => response.json())
            .then((data) => {
                activeKeys(dispatch, data);
            })
            .catch(err => {
                console.log(err.message)
            })
    };

    //Get all keys matched to me.
    const getMyKeysData = () => {
        fetchMyKeysData(user.user_id)
            .then(response => response.json())
            .then(data => {

                data.sort(compareDate).reverse()
                myKeys(dispatch, data)
            })
            .catch(err => {
                console.log(err.message)
            })
    };

    //Get all keys transferred to me.
    const getKeysTransferedToMe = () => {
        API.data.fetchKeysTrasferedToMe(user.user_id)
            .then(response => response.json())
            .then(data => {
                keysTransferedToMe(dispatch, data)
            })
            .catch(err => {
                console.log(err.message)
            })
    };


    const getKey = (keyID) => {
        const dataToUpdate = {
            keyID: keyID,
            isTakenBy: user.user_id,
            isTaken: true,
            isTakenData: dateNowJSON
        }

        API.data.fetchGetKey(dataToUpdate)
            .then(response => response.json())
            .then(data => {
                getKeysData();
                getMyKeysData();
                getKeysTransferedToMe();
            })
            .catch(err => {
                console.log(err.message)
            })
    };

    const returnKey = (keyID) => {
        const dataToUpdate = {
            keyID: keyID,
            isTakenBy: "",
            isTaken: false,
            isTakenData: "",
            isReturnedData: new Date()
        }

        API.data.fetchReturnKey(dataToUpdate)
            .then(response => response.json())
            .then(data => {
                getKeysData();
                getMyKeysData();
            })
            .catch(err => {
                console.log(err.message)
            })
    };

    // Accept transfered key and take it.
    const getTransferredKey = (keyID) => {

    }

    // Rejected transfered key and not take it.
    const rejectTransferredKey = (keyID) => {
        fetchIsTransferedToUpdate({
                keyID: keyID,
                user_id: ""
            })
            .then(response => response.json())
            .then(data => {
                getMyKeysData();
                getKeysTransferedToMe();
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    return ({
        getKeysData,
        getMyKeysData,
        getKey,
        returnKey,
        getKeysTransferedToMe,
        getTransferredKey,
        rejectTransferredKey
    })
}

export default useKeyAction;
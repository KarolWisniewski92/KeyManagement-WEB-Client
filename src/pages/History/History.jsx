import { fetchKeyHistory } from 'Data/fetch/history.fetch';
import { fetchKeyData } from 'Data/fetch/data.fetch';
import { HistoryBody, HistoryBodyHeroImage, CloseHistoryBTN, Table } from './History.css';
import { useEffect, useState } from 'react';
import {
    useHistory
} from "react-router-dom";
import { StyledText } from 'components';
import { fetchUserData } from 'Data/fetch/authentication.fetch';

const History = () => {
    const params = new URLSearchParams(window.location.search)
    const keyID = params.get('keyID');
    let history = useHistory();

    const [keyHistory, setKeyHistory] = useState([]);
    const [keyData, setKeyData] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUserData, setCurrentUserData] = useState([]);


    useEffect(() => {
        fetchKeyHistory(keyID)
            .then(response => response.json())
            .then(data => setKeyHistory(data.reverse()))
            .catch(err => console.log(err.message))

        fetchKeyData(keyID)
            .then(response => response.json())
            .then(data => setKeyData(data[0]))
            .catch(err => console.log(err.message))

    }, [keyID]);

    useEffect(() => {
        let historyUsers = keyHistory.map(el => {
            return el.isTakenBy
        })
        historyUsers = [...new Set(historyUsers)]
        setUsers(historyUsers);
    }, [keyHistory])

    useEffect(() => {
        getUsersPersonalData();
    }, [users])

    const getUsersPersonalData = async () => {
        const usersData = await Promise.all(users.map(async el => {
            return await fetchUserData(el)
                .then(response => response.json())

        }))
        setCurrentUserData(usersData);
    }


    let historyList = <StyledText marginVertical="50px" align="center">Brak wpisów w historii!</StyledText>

    if (keyHistory.length > 0) {
        historyList =
            <Table>
                <thead>
                    <tr>
                        <th>Osoba pobierająca:</th>
                        <th>Data pobrania:</th>
                        <th>Data zwrotu:</th>
                    </tr>
                </thead>
                <tbody>
                    {keyHistory.map(el => {
                        const takenDate = new Date(el.isTakenData);
                        const returnedDate = new Date(el.isReturnedData);

                        const takenDataToShow = `
                        ${("0" + takenDate.getDate()).slice(-2)}.${("0" + (takenDate.getMonth() + 1)).slice(-2)}.${takenDate.getFullYear()} 
                        ${("0" + takenDate.getHours()).slice(-2)}:${("0" + takenDate.getMinutes()).slice(-2)}`;

                        const returnedDataToShow = Date.parse(returnedDate) === 0 ? "Nie zwrócono!" :
                            `
                            ${("0" + returnedDate.getDate()).slice(-2)}.${("0" + (returnedDate.getMonth() + 1)).slice(-2)}.${returnedDate.getFullYear()} ${("0" + returnedDate.getHours()).slice(-2)}:${("0" + returnedDate.getMinutes()).slice(-2)}`;

                        const userID = el.isTakenBy;
                        let user = currentUserData.filter(el => {
                            if (userID === el.user_id) {
                                return el
                            } else {
                                return null
                            }
                        })

                        user = user[0]

                        let userToShow = "";
                        if (user !== undefined && Object.keys(user).length > 0) {
                            userToShow = `${user.name} ${user.surname}`
                        }


                        // console.log(user);
                        return <tr key={el._id}>
                            <td>{userToShow}</td>
                            <td>{takenDataToShow}</td>
                            <td>{returnedDataToShow}</td>
                        </tr>
                    })}
                </tbody>
            </Table>
    }

    return (
        <HistoryBodyHeroImage>
            <HistoryBody>
                <CloseHistoryBTN onClick={() => {
                    history.push('/dashboard')
                }}>
                    X
                </CloseHistoryBTN>
                <StyledText size="1.5em" type="header" align="center" l_size="2em">{keyData.name}<br />{keyData.adres}</StyledText>
                {historyList}
            </HistoryBody>
        </HistoryBodyHeroImage>
    )

}

export default History;
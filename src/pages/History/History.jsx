import { fetchKeyHistory } from 'Data/fetch/history.fetch';
import { fetchKeyData } from 'Data/fetch/data.fetch';
import { HistoryBody, HistoryBodyHeroImage, CloseHistoryBTN, Table } from './History.css';
import { useEffect, useState } from 'react';
import {
    useHistory
} from "react-router-dom";
import { StyledText } from 'components';

const History = () => {
    const params = new URLSearchParams(window.location.search)
    const isKeyID = params.has('keyID');
    const keyID = params.get('keyID');
    let history = useHistory();

    const [keyHistory, setKeyHistory] = useState([]);
    const [keyData, setKeyData] = useState([]);

    useEffect(() => {
        fetchKeyHistory(keyID)
            .then(response => response.json())
            .then(data => setKeyHistory(data.reverse()))
            .catch(err => console.log(err.message))
    }, [keyID]);

    useEffect(() => {
        fetchKeyData(keyID)
            .then(response => response.json())
            .then(data => setKeyData(data[0]))
            .catch(err => console.log(err.message))
    }, [keyID]);

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

                        const takenDataToShow = `${takenDate.getDate()}.${takenDate.getMonth() + 1}.${takenDate.getFullYear()} ${takenDate.getHours()}:${takenDate.getMinutes()}`;

                        const returnedDataToShow = Date.parse(returnedDate) === 0 ? "Nie zwrócono!" :
                            `${takenDate.getDate()}.${returnedDate.getMonth() + 1}.${returnedDate.getFullYear()} ${returnedDate.getHours()}:${returnedDate.getMinutes()}`;

                        return <tr>
                            <td>{el.isTakenBy}</td>
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
                <StyledText type="header" align="center">{keyData.name}<br />{keyData.adres}</StyledText>
                {historyList}
            </HistoryBody>
        </HistoryBodyHeroImage>
    )

}

export default History;
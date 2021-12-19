import { Fragment, useEffect, useState } from 'react';
import { SingleKeyBody, SingleKeyHeader, SingleKeyFooter, SingleKeyIcon, SigleKeyInfo, SingleKeyNavigation, SingleKeyButton, SingleKeyIconBox } from './SingleKeyComponent.css'
import keyIcon from '../../image/png/Key1.png';
import { fetchUserData } from 'Data/fetch/authentication.fetch';

const defaultKeyData = {
    set: "",
    name: "",
    isTaken: false,
    isTakenBy: "",
    isTakenData: "",
    adres: ""
}


const SingleKeyComponent = ({ keyData = defaultKeyData }) => {

    const [users, setUsers] = useState([]);

    console.log(users);

    useEffect(() => {
        (async () => {
            if (keyData.isTaken) {
                const user = await fetchUserData(keyData.isTakenBy)
                    .then(response => response.json())
                    .then(data => {
                        return data;
                    })
                console.log(user);
                setUsers(user)
            }
        })()

    }, [keyData.isTaken, keyData.isTakenBy])


    // console.log(keyData);
    return (
        <SingleKeyBody>
            <SingleKeyHeader>
                <p>INEA</p>
            </SingleKeyHeader>
            {keyData.isTaken &&
                <SigleKeyInfo>
                    <p><b>{users.name} {users.surname}</b></p>
                    <p>tel. {users.phone} </p>
                    <p>Data: {keyData.isTakenData}</p>

                </SigleKeyInfo>
            }
            {!keyData.isTaken &&
                <SingleKeyIconBox>
                    <SingleKeyIcon src={keyIcon} alt="Key Icon" />
                </SingleKeyIconBox>
            }

            <SingleKeyFooter>
                <div>{keyData.name}</div>
                <div>{keyData.adres}</div>
            </SingleKeyFooter>

            {!keyData.isTaken &&
                <SingleKeyNavigation>
                    <SingleKeyButton> Pobierz klucz!</SingleKeyButton>
                </SingleKeyNavigation>}
        </SingleKeyBody>
    )
}
export default SingleKeyComponent;
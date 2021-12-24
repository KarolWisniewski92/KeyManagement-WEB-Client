import { useEffect, useState } from 'react';
import { SingleKeyBody, SingleKeyHeader, SingleKeyFooter, SingleKeyIcon, SigleKeyInfo, SingleKeyNavigation, SingleKeyButton, SingleKeyIconBox, SingleKeyButtonYes, SingleKeyButtonNo, NavigationWrapper, ButtonWrapper } from './SingleKeyComponent.css'
import keyIcon from '../../image/png/Key1.png';
import { fetchUserData } from 'Data/fetch/authentication.fetch';
import useKeyAction from 'hooks/useKeyAction';
import StyledText from 'components/StyledText/StyledText';

const defaultKeyData = {
    keyID: "",
    set: "",
    name: "",
    isTaken: false,
    isTakenBy: "",
    isTakenData: "",
    adres: ""
}


const SingleKeyComponent = ({ keyData = defaultKeyData }) => {

    const [users, setUsers] = useState([]);
    const [confirmAction, setConfirmAction] = useState(false);

    const keyActions = useKeyAction();


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
                    <p><b>tel.</b> {users.phone} </p>
                    <p><b>Data:</b> {keyData.isTakenData}</p>

                </SigleKeyInfo>
            }
            {!keyData.isTaken &&
                <SingleKeyIconBox>
                    <SingleKeyIcon src={keyIcon} alt="Key Icon" />
                </SingleKeyIconBox>
            }

            <SingleKeyFooter>
                <div><b>{keyData.name}</b></div>
                <div>{keyData.adres}</div>
            </SingleKeyFooter>

            {!keyData.isTaken &&
                <SingleKeyNavigation>
                    {!confirmAction &&
                        <SingleKeyButton onClick={() => {

                            setConfirmAction(true)
                        }}> Pobierz klucz!</SingleKeyButton>
                    }

                    {confirmAction &&
                        <NavigationWrapper>
                            <StyledText marginVertical="10px">Potwierdz pobranie:</StyledText>
                            <ButtonWrapper>
                                <SingleKeyButtonYes onClick={() => {
                                    keyActions.getKey(keyData.keyID)
                                    setConfirmAction(false);
                                }}>Tak</SingleKeyButtonYes>
                                <SingleKeyButtonNo onClick={() => {
                                    setConfirmAction(false);
                                }}>Nie</SingleKeyButtonNo>
                            </ButtonWrapper>

                        </NavigationWrapper>
                    }

                </SingleKeyNavigation>}
        </SingleKeyBody>
    )
}
export default SingleKeyComponent;
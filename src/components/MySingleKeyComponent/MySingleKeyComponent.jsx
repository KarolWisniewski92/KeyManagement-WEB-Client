import { MyKeyBox, Navigation, SingleKeyIcon, KeyIconBox, HeaderBox, InfoBox, MySingleKeyButton, TransferedInput, Li, Ul, CancelButton, MiniBox, MySingleKeyHeader, TransferredBox, TransferredBoxConfirmButtonBox } from "./MySingleKeyComponent.css"
import { ConfirmBox, StyledText, Wrapper } from "components";
import keys from '../../image/png/keys/index';
import useKeyAction from 'hooks/useKeyAction';
import { Fragment, useState } from 'react';
import { fetchFindUserToTransfer, fetchIsTransferedToUpdate } from "Data/fetch/data.fetch";
import { fetchUserData } from "Data/fetch/authentication.fetch";

const MySingleKeyComponent = ({ keyData }) => {

    const keyActions = useKeyAction();

    const [confirmAction, setConfirmAction] = useState(false);
    const [isTransfered, setIsTransfered] = useState(false);
    const [availableUser, setAvailableUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isTransferedTo, setIsTransferedTo] = useState({});


    //Uruchom funkcję po 2 sekundach bezczynności w input
    let findUserTimeout;
    const findUserToTransfer = (e) => {
        setSelectedUser("");
        clearTimeout(findUserTimeout);
        findUserTimeout = setTimeout(() => {
            fetchFindUserToTransfer(e.target.value)
                .then(response => response.json())
                .then(data => {

                    data.length === 0 ? setErrorMessage("Nie znaleziono użytkownika!") : setErrorMessage("")
                    setAvailableUser(data);
                })
                .catch(err => {
                    console.log(err.message)
                })
        }, 1000)
    };

    //Wyczyść timeout dla funkcji findUserTimeout
    const clearFindUserTimeout = () => {
        clearTimeout(findUserTimeout);
    };

    //Sprawdza czy klucz jest przekazywany, jeżeli tak to pobiera dane użytkownika docelowego.
    if (keyData.isTransferedTo && Object.keys(isTransferedTo).length === 0) {
        (async () => {
            await fetchUserData(keyData.isTransferedTo)
                .then(response => response.json())
                .then(user => {
                    setIsTransferedTo(user)
                })
                .catch(err => {
                    console.log(err.message)
                })
        })();
    };

    //Tworzymy Listę wyszukanych użytkowników do wyświetlenia
    let userListToTransfer;

    if (availableUser.length > 0) {
        userListToTransfer = availableUser.map(el => {
            return (

                <Li
                    key={el.user_id}
                    name={el.user_id}
                    isSelected={(() => {
                        return el.user_id === selectedUser ? true : false;
                    })()}
                    onClick={(e) => {
                        if (selectedUser === e.target.getAttribute('name')) {
                            setSelectedUser("");
                        } else {
                            setSelectedUser(e.target.getAttribute('name'));
                        }
                    }}>{el.name} {el.surname}</Li>)
        })
    };

    return (
        <MyKeyBox set={keyData.set}>
            <MiniBox set={keyData.set}>{keyData.owner}</MiniBox>
            <MySingleKeyHeader />
            <HeaderBox>
                <KeyIconBox>
                    <SingleKeyIcon
                        src={keys[keyData.imageID - 1]}
                        alt="Key Icon" />

                </KeyIconBox>
                <InfoBox>

                    <StyledText
                        type='header'
                        size='20px'
                        align="center"
                        textTransform="UPPERCASE">
                        {keyData.name}
                    </StyledText>

                    <StyledText
                        align="center"
                        margin="0px">
                        {keyData.adres}
                    </StyledText>

                </InfoBox>

            </HeaderBox>

            <Navigation set={keyData.set}>
                {!confirmAction &&
                    <Fragment>
                        <MySingleKeyButton
                            onClick={() => {
                                setConfirmAction(true);
                            }}>
                            Zwróć klucz
                        </MySingleKeyButton>

                        <MySingleKeyButton
                            onClick={() => {
                                setIsTransfered(true);
                            }}>
                            Przekaż klucz
                        </MySingleKeyButton>
                    </Fragment>
                }

                {confirmAction &&
                    <ConfirmBox
                        yesCallback={() => {
                            keyActions.returnKey(keyData.keyID)
                            setConfirmAction(false)
                        }}
                        noCallback={() => {
                            setConfirmAction(false)
                        }}
                        title='Potwierdź zwrot'>
                    </ConfirmBox>
                }
            </Navigation>

            {keyData.isTransferedTo !== "" &&
                <TransferredBox set={keyData.set} >
                    <StyledText align="center" marginVertical="5px">Klucz jest obecnie przekazywany!</StyledText>
                    <StyledText align="center" marginVertical="5px"> Oczekuje na potwierdzenie:</StyledText>
                    <StyledText align="center" marginVertical="5px">{isTransferedTo.name} {isTransferedTo.surname}<CancelButton onClick={() => {
                        keyActions.rejectTransferredKey(keyData.keyID)
                    }}>Anuluj</CancelButton></StyledText>
                </TransferredBox >
            }


            {
                isTransfered &&
                <TransferredBox set={keyData.set}>
                    <TransferedInput
                        onKeyUp={findUserToTransfer}
                        onKeyDown={clearFindUserTimeout}
                        type="text"
                        placeholder="Wyszukaj użytkownika..." />
                    <Ul>
                        {userListToTransfer}
                    </Ul>
                    <StyledText
                        align="center"
                        color="red">
                        {errorMessage}
                    </StyledText>
                    <TransferredBoxConfirmButtonBox>
                        <MySingleKeyButton
                            onClick={() => {
                                if (selectedUser === "") {
                                    setErrorMessage("Nie wybrano użytkownika!")
                                } else {
                                    fetchIsTransferedToUpdate({
                                        keyID: keyData.keyID,
                                        user_id: selectedUser
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            if (data.error === false) {
                                                setIsTransfered(false);
                                                setAvailableUser([]);
                                                setSelectedUser("");
                                                keyActions.getMyKeysData();
                                            } else {
                                                setErrorMessage("Wystąpił błąd! Spróbuj ponownie!")
                                            }
                                        })
                                        .catch(err => {
                                            console.log(err.message)
                                        })
                                }
                            }}>
                            Przekaż
                        </MySingleKeyButton>

                        <MySingleKeyButton
                            onClick={() => {
                                setIsTransfered(false);
                                setAvailableUser([]);
                                setSelectedUser("");
                            }}>
                            Anuluj
                        </MySingleKeyButton>
                    </TransferredBoxConfirmButtonBox>

                </TransferredBox>
            }

        </MyKeyBox >
    )
}

export default MySingleKeyComponent;
import { MyKeyBox, Navigation, SingleKeyIcon, KeyIconBox, HeaderBox, InfoBox, MySingleKeyButton, TransferedInput, Li, Ul, CancelButton } from "./MySingleKeyComponent.css"
import { ConfirmBox, StyledText } from "components";
import keyIcon from '../../image/png/Key1.png';
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
            <HeaderBox>
                <KeyIconBox>
                    <SingleKeyIcon
                        src={keyIcon}
                        alt="Key Icon" />

                </KeyIconBox>
                <InfoBox>

                    <StyledText
                        type='header'
                        size='20px'
                        align="center">
                        {keyData.name}
                    </StyledText>

                    <StyledText
                        align="center"
                        margin="0px">
                        {keyData.adres}
                    </StyledText>

                </InfoBox>

            </HeaderBox>

            <Navigation>
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
                        YesCallback={() => {
                            keyActions.returnKey(keyData.keyID)
                            setConfirmAction(false)
                        }}
                        NoCallback={() => {
                            setConfirmAction(false)
                        }}
                        Title='Potwierdź zwrot'>
                    </ConfirmBox>
                }
            </Navigation>

            {keyData.isTransferedTo !== "" &&
                <Fragment>
                    <StyledText align="center" marginVertical="5px">Klucz jest obecnie przekazywany!</StyledText>
                    <StyledText align="center" marginVertical="5px"> Oczekuje na potwierdzenie:</StyledText>
                    <StyledText align="center" marginVertical="5px">{isTransferedTo.name} {isTransferedTo.surname}<CancelButton onClick={() => {
                        fetchIsTransferedToUpdate({
                            keyID: keyData.keyID,
                            user_id: ""
                        })
                            .then(response => response.json())
                            .then(data => {
                                if (data.error === false) {
                                    keyActions.getMyKeysData();
                                } else {
                                    setErrorMessage("Wystąpił błąd! Spróbuj ponownie!")
                                }
                            })
                    }}>Anuluj</CancelButton></StyledText>
                </Fragment >
            }


            {
                isTransfered &&
                <div>
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
                    <div>
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
                    </div>

                </div>
            }

        </MyKeyBox >
    )
}

export default MySingleKeyComponent;
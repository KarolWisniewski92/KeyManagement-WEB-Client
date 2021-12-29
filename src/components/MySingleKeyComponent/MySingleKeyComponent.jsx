import { MyKeyBox, Navigation, SingleKeyIcon, KeyIconBox, HeaderBox, FotterBox, MySingleKeyButton, TransferedInput, Li, Ul } from "./MySingleKeyComponent.css"
import { ConfirmBox, StyledText, Button } from "components";
import keyIcon from '../../image/png/Key1.png';
import useKeyAction from 'hooks/useKeyAction';
import { useState } from 'react';
import { Fragment } from "react";
import { fetchFindUserToTransfer } from "Data/fetch/data.fetch";

const MySingleKeyComponent = ({ keyData }) => {

    const keyActions = useKeyAction();
    const [confirmAction, setConfirmAction] = useState(false);
    const [isTransfered, setIsTransfered] = useState(false);
    const [availableUser, setAvailableUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");


    //Uruchom funkcję po 2 sekundach bezczynności w input
    let findUserTimeout;
    const findUserToTransfer = (e) => {
        setSelectedUser("");
        clearTimeout(findUserTimeout);
        findUserTimeout = setTimeout(() => {
            fetchFindUserToTransfer(e.target.value)
                .then(response => response.json())
                .then(data => {
                    setAvailableUser(data);
                })
        }, 2000)

    }

    //Wyczyść timeout dla funkcji findUserTimeout
    const clearFindUserTimeout = () => {
        clearTimeout(findUserTimeout);
    }

    let userListToTransfer = <StyledText align="center">Nie znaleziono użytkownika!</StyledText>

    if (availableUser.length > 0) {
        userListToTransfer = availableUser.map(el => {
            return (<Li key={el.user_id} name={el.user_id} isSelected={(() => {
                return el.user_id === selectedUser ? true : false;
            })()} onClick={(e) => {
                if (selectedUser === e.target.getAttribute('name')) {
                    setSelectedUser("");
                } else {
                    setSelectedUser(e.target.getAttribute('name'));
                }
            }}>{el.name} {el.surname}</Li>)
        })
    }

    return (
        <MyKeyBox>
            <HeaderBox>
                <KeyIconBox>
                    <SingleKeyIcon src={keyIcon} alt="Key Icon" />
                </KeyIconBox>
                <FotterBox>
                    <StyledText type='header' size='20px' align="center">{keyData.name}</StyledText>
                    <StyledText align="center" margin="0px"> {keyData.adres}</StyledText>
                </FotterBox>
            </HeaderBox>

            <Navigation>
                {!confirmAction &&
                    <Fragment>
                        <MySingleKeyButton onClick={() => {
                            setConfirmAction(true);
                        }}>
                            Zwróć klucz
                        </MySingleKeyButton>

                        <MySingleKeyButton onClick={() => {
                            setIsTransfered(true);
                        }}>
                            Przekaż klucz
                        </MySingleKeyButton>
                    </Fragment>
                }
                {confirmAction &&
                    <ConfirmBox YesCallback={() => {
                        keyActions.returnKey(keyData.keyID)
                        setConfirmAction(false)
                    }
                    } NoCallback={() => {
                        setConfirmAction(false)
                    }} Title='Potwierdź zwrot' ></ConfirmBox>
                }



            </Navigation>

            {isTransfered &&
                <div>
                    <TransferedInput onKeyUp={findUserToTransfer} onKeyDown={clearFindUserTimeout} type="text" placeholder="Wyszukaj użytkownika..." />
                    <Ul>
                        {userListToTransfer}
                    </Ul>
                    <MySingleKeyButton>Przekaż</MySingleKeyButton>
                    <MySingleKeyButton onClick={() => {
                        setIsTransfered(false);
                        setAvailableUser([]);
                        setSelectedUser("");
                    }}>Anuluj</MySingleKeyButton>
                </div>
            }


        </MyKeyBox>
    )
}

export default MySingleKeyComponent;
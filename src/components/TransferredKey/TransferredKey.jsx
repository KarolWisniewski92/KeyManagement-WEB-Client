import { ConfirmBox, StyledText } from "components";
import { useSelector } from "react-redux";
import { TransferredKeyBox, FlexWrapper } from "./TransferredKey.css";
import { useState, useEffect } from 'react';
import useKeyAction from "hooks/useKeyAction";
import { fetchUserData } from "Data/fetch/authentication.fetch";

const TransferredKey = () => {

    const keysTransferedToMe = useSelector(state => state.data.keysTransferedToMe); //List keys transferred to me!
    const [currentKeyUser, setCurrentKeyUser] = useState([]); // List user_id collected from keysTransferedToMe!
    const [currentKeyUserData, setCurrentKeyUserData] = useState([]); //List userData for currentKeyUser!

    const keyActions = useKeyAction();

    const getUsersPersonalData = async () => {

        const users = await Promise.all(currentKeyUser.map(async el => {
            return await fetchUserData(el)
                .then(response => response.json())

        }))
        setCurrentKeyUserData(users);
    }

    useEffect(() => {
        let user = [];
        keysTransferedToMe.forEach(el => {
            user = [...user, el.isTakenBy]
        })

        user = [...new Set(user)] //delete dupplicate from array
        setCurrentKeyUser(user);
    }, [keysTransferedToMe])

    useEffect(() => {
        getUsersPersonalData();
    }, [currentKeyUser])

    let listToshow;
    if (keysTransferedToMe.length !== 0 && currentKeyUserData.length !== 0) {
        listToshow = keysTransferedToMe.map((el) => {
            const user = el.isTakenBy;


            let userData = currentKeyUserData.filter(el => {
                if (el.user_id === user) { return el }
                else {
                    return null
                }
            })
            userData = userData[0];
            return (
                <TransferredKeyBox key={el.name}>
                    <StyledText align="center">Użytkownik <b>{userData.name} {userData.surname}</b> chce ci przekazać klucz do lokalizacji:</StyledText>
                    <StyledText
                        type='header'
                        size='20px'
                        align="center"
                        textTransform="UPPERCASE"> {el.name}
                    </StyledText>

                    <FlexWrapper>
                        <ConfirmBox
                            yesCallback={() => {
                                keyActions.getKey(el.keyID);
                            }}
                            noCallback={() => {
                                keyActions.rejectTransferredKey(el.keyID);
                            }}
                            title="Potwierdź odbiór"></ConfirmBox>
                    </FlexWrapper>
                </TransferredKeyBox>

            )
        }
        )

    }

    return (<div>
        {listToshow}
    </div>)
}

export default TransferredKey;
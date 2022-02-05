import { useEffect, useState } from 'react';
import { SingleKeyBody, SingleKeyHeader, SingleKeyFooter, SingleKeyIcon, SigleKeyInfo, SingleKeyNavigation, SingleKeyButton, SingleKeyIconBox, SingleKeyInfoBox, MiniBox } from './SingleKeyComponent.css'
import keyIcon from '../../image/png/Key1.png';
import { fetchUserData } from 'Data/fetch/authentication.fetch';
import useKeyAction from 'hooks/useKeyAction';
import { StyledText, ConfirmBox } from 'components';

const defaultKeyData = {
    keyID: "",
    set: "",
    name: "",
    owner: "",
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
                    .catch(err => {
                        console.log(err.message);
                    })
                setUsers(user)
            }
        })()

    }, [keyData.isTaken, keyData.isTakenBy])
    return (
        <SingleKeyBody>
            <MiniBox set={keyData.set}>{keyData.owner}</MiniBox>
            <SingleKeyHeader set={keyData.set}>
            </SingleKeyHeader >
            {keyData.isTaken &&
                <SingleKeyInfoBox>
                    {typeof users !== "undefined" &&
                        <SigleKeyInfo set={keyData.set}>
                            <p><b>{users.name} {users.surname}</b></p>
                            <p><b>tel.</b> {users.phone} </p>
                            <p><b>Data:</b> {keyData.isTakenData}</p>
                        </SigleKeyInfo>
                    }

                </SingleKeyInfoBox>
            }

            {!keyData.isTaken &&
                <SingleKeyIconBox>
                    <SingleKeyIcon src={keyIcon} alt="Key Icon" />
                </SingleKeyIconBox>
            }

            <SingleKeyFooter set={keyData.set}>
                <StyledText
                    margin="20px 0px 10px 0px"
                    textTransform="UPPERCASE"><b>{keyData.name}</b></StyledText>
                <StyledText>{keyData.adres}</StyledText>
            </SingleKeyFooter>

            {!keyData.isTaken &&
                <SingleKeyNavigation set={keyData.set}>
                    {!confirmAction &&
                        <SingleKeyButton onClick={() => {
                            setConfirmAction(true)
                        }}> Pobierz klucz!</SingleKeyButton>
                    }

                    {confirmAction &&
                        <ConfirmBox
                            yesCallback={() => {
                                keyActions.getKey(keyData.keyID)
                                setConfirmAction(false)
                            }
                            }
                            noCallback={() => {
                                setConfirmAction(false)
                            }}
                            title='Potwierdź pobranie' ></ConfirmBox>
                    }

                </SingleKeyNavigation>}
        </SingleKeyBody>
    )
}
export default SingleKeyComponent;
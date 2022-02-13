import { useEffect, useState } from 'react';
import { SingleKeyBody, SingleKeyHeader, SingleKeyFooter, SingleKeyIcon, SigleKeyInfo, SingleKeyNavigation, SingleKeyButton, SingleKeyIconBox, SingleKeyInfoBox, MiniBox } from './SingleKeyComponent.css'
import keys from '../../image/png/keys/index';
import { fetchUserData } from 'Data/fetch/authentication.fetch';
import useKeyAction from 'hooks/useKeyAction';
import { StyledText, ConfirmBox } from 'components';
import {
    useHistory
} from "react-router-dom";

const defaultKeyData = {
    keyID: "",
    set: "",
    name: "",
    owner: "",
    isTaken: false,
    isTakenBy: "",
    isTakenData: "",
    adres: "",
    imageID: 1,
}


const SingleKeyComponent = ({ keyData = defaultKeyData }) => {

    const [users, setUsers] = useState([]);
    const [confirmAction, setConfirmAction] = useState(false);

    const keyActions = useKeyAction();
    let history = useHistory();


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

    const sourceData = new Date(keyData.isTakenData);
    const date = `${("0" + sourceData.getDate()).slice(-2)}.${("0" + sourceData.getMonth() + 1).slice(-2)}.${sourceData.getFullYear()} ${("0" + sourceData.getHours()).slice(-2)}:${("0" + sourceData.getMinutes()).slice(-2)}`

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
                            <p><b>Data:</b> {date}</p>
                        </SigleKeyInfo>
                    }
                </SingleKeyInfoBox>
            }

            {!keyData.isTaken &&
                <SingleKeyIconBox>
                    <SingleKeyIcon src={keys[keyData.imageID - 1]} alt="Key Icon" />
                </SingleKeyIconBox>
            }

            <SingleKeyFooter set={keyData.set}>
                <StyledText
                    margin="20px 0px 10px 0px"
                    textTransform="UPPERCASE"><b>{keyData.name}</b></StyledText>
                <StyledText>{keyData.adres}</StyledText>
            </SingleKeyFooter>


            <SingleKeyNavigation set={keyData.set}>
                {!confirmAction &&
                    <SingleKeyButton disabled={keyData.isTaken ? true : false} onClick={() => {
                        setConfirmAction(true)
                    }}> Pobierz klucz!</SingleKeyButton>
                }
                <SingleKeyButton last={true} onClick={() => {
                    history.push(`/dashboard/history?keyID=${keyData.keyID}`)

                }}> Zobacz historię!</SingleKeyButton>

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

            </SingleKeyNavigation>
        </SingleKeyBody>
    )
}
export default SingleKeyComponent;
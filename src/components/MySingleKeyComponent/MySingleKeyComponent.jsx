import { MyKeyBox, Navigation, SingleKeyIcon, KeyIconBox, HeaderBox, FotterBox, MySingleKeyButton } from "./MySingleKeyComponent.css"
import { ConfirmBox, StyledText } from "components";
import keyIcon from '../../image/png/Key1.png';
import useKeyAction from 'hooks/useKeyAction';
import { useState } from 'react';
import { Fragment } from "react";

const MySingleKeyComponent = ({ keyData }) => {

    const keyActions = useKeyAction();
    const [confirmAction, setConfirmAction] = useState(false);

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
                            console.log(confirmAction)
                        }}>Zwróć klucz</MySingleKeyButton>
                        <MySingleKeyButton>Przekaż klucz</MySingleKeyButton>
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




        </MyKeyBox>
    )
}

export default MySingleKeyComponent;
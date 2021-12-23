import { MyKeyBox, Navigation, SingleKeyIcon, KeyIconBox, HeaderBox, FotterBox, MySingleKeyButton } from "./MySingleKeyComponent.css"
import { StyledText } from "components";
import keyIcon from '../../image/png/Key1.png';
import useKeyAction from 'hooks/useKeyAction';

const MySingleKeyComponent = ({ keyData }) => {

    const keyActions = useKeyAction();

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
                <MySingleKeyButton onClick={() => {
                    keyActions.returnKey(keyData.keyID)
                }}>Zwróć klucz</MySingleKeyButton>
                <MySingleKeyButton>Przekaż klucz</MySingleKeyButton>
            </Navigation>

        </MyKeyBox>
    )
}

export default MySingleKeyComponent;
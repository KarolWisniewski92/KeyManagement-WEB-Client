import { SingleKeyComponent, StyledText } from 'components';
import { connect } from 'react-redux';
import { KeyBoxBody, HiddenComponent, KeyBoxWrapper } from './KeyBox.css';

const KeyBox = ({ keys, localization }) => {

    const singleKeyList = keys.map((el) => {
        return <SingleKeyComponent key={el.keyID} keyData={el}></SingleKeyComponent>
    })
    return (
        <KeyBoxWrapper>
            <StyledText
                type="header"
                align="center">KLUCZE W LOKALIZACJ: {localization} </StyledText>

            <KeyBoxBody>
                {singleKeyList}
                <HiddenComponent></HiddenComponent>
                <HiddenComponent></HiddenComponent>
                <HiddenComponent></HiddenComponent>
                <HiddenComponent></HiddenComponent>
                <HiddenComponent></HiddenComponent>

            </KeyBoxBody>
        </KeyBoxWrapper>


    )
}

export default connect((state) => {
    return ({
        keys: state.data.keys,
        localization: state.main.selected_set
    })

}, null)(KeyBox);
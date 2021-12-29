import { SingleKeyComponent, StyledText } from 'components';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { KeyBoxBody, HiddenComponent, KeyBoxWrapper } from './KeyBox.css';

const KeyBox = ({ keys, localization }) => {

    let singleKeyList = <StyledText align="center">Nie ma żandych kluczy w wybranym zestawie!</StyledText>;

    if (keys.length !== 0) {
        singleKeyList = keys.map((el) => {
            return <SingleKeyComponent key={el.keyID} keyData={el}></SingleKeyComponent>
        })
    }

    return (
        <KeyBoxWrapper>
            <StyledText
                type="header"
                align="center">KLUCZE W LOKALIZACJ: {localization} </StyledText>

            <KeyBoxBody>
                {singleKeyList}

                {keys.length !== 0 &&
                    <Fragment>
                        <HiddenComponent></HiddenComponent>
                        <HiddenComponent></HiddenComponent>
                        <HiddenComponent></HiddenComponent>
                        <HiddenComponent></HiddenComponent>
                        <HiddenComponent></HiddenComponent>
                        <HiddenComponent></HiddenComponent>
                        <HiddenComponent></HiddenComponent>
                    </Fragment>
                }


            </KeyBoxBody>
        </KeyBoxWrapper >


    )
}

export default connect((state) => {
    return ({
        keys: state.data.keys,
        localization: state.main.selected_set
    })

}, null)(KeyBox);
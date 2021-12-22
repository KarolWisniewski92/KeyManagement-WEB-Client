import { MySingleKeyComponent, StyledText } from 'components';
import { UserBoxBody, UserBoxWrapper } from './UserBox.css';
import { connect } from 'react-redux';

const UserBox = ({ myKeys }) => {

    let myKeysList = <StyledText align="center">Nie masz obecnie żadnych kluczy!</StyledText>
    if (myKeys.length !== 0) {
        myKeysList = myKeys.map(el => {
            return (
                <MySingleKeyComponent keyData={el} key={el.keyID}></MySingleKeyComponent>
            )
        })

    }


    return (

        <UserBoxWrapper>
            <StyledText
                type="header"
                align="center">MOJE KLUCZE:</StyledText>

            <UserBoxBody>
                {myKeysList}
            </UserBoxBody>
        </UserBoxWrapper>
    )
}

export default connect((state) => {
    return ({
        myKeys: state.data.myKeys
    })

}, null)(UserBox);
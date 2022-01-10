import { MySingleKeyComponent, StyledText, TransferredKey } from 'components';
import { UserBoxBody, UserBoxWrapper } from './UserBox.css';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../../../../utils/animation.css';

const UserBox = ({ myKeys }) => {
    let myKeysList;

    if (myKeys.length === 0) {
        myKeysList = <StyledText align="center">Nie masz obecnie żadnych kluczy!</StyledText>
    }

    if (myKeys.length !== 0) {
        myKeysList = myKeys.map(el => {
            return (
                <CSSTransition
                    key={el.keyID}
                    timeout={500}
                    classNames="fadeInOut">
                    <MySingleKeyComponent keyData={el} key={el.keyID}></MySingleKeyComponent>
                </CSSTransition>
            )
        })
    }

    return (

        <UserBoxWrapper>
            <StyledText
                type="header"
                align="center">MOJE KLUCZE:</StyledText>

            <UserBoxBody>
                <TransferredKey></TransferredKey>
                <TransitionGroup>
                    {myKeysList}
                </TransitionGroup>
            </UserBoxBody>
        </UserBoxWrapper>
    )
}

export default connect((state) => {
    return ({
        myKeys: state.data.myKeys
    })

}, null)(UserBox);
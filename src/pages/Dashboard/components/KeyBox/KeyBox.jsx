import { SingleKeyComponent } from 'components';
import { connect } from 'react-redux';
import { KeyBoxBody, HiddenComponent } from './KeyBox.css';

const KeyBox = ({ keys }) => {

    const singleKeyList = keys.map((el) => {
        return <SingleKeyComponent key={el.keyID} keyData={el}></SingleKeyComponent>
    })
    return (
        <KeyBoxBody>
            {singleKeyList}
            <HiddenComponent></HiddenComponent>
            <HiddenComponent></HiddenComponent>
            <HiddenComponent></HiddenComponent>
            <HiddenComponent></HiddenComponent>
            <HiddenComponent></HiddenComponent>

        </KeyBoxBody>
    )
}

export default connect((state) => {
    return ({
        keys: state.data.keys
    })

}, null)(KeyBox);
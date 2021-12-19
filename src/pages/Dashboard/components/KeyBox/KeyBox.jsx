import { SingleKeyComponent } from 'components';
import { KeyBoxBody, HiddenComponent } from './KeyBox.css';

const keys = [{
    keyID: "KP_3213",
    set: "KP",
    name: "Grodzisk WLKP",
    isTaken: true,
    isTakenBy: "twis",
    isTakenData: "02.12.2021",
    adres: "ul.Czereśniowa 20"
}, {
    keyID: "KP_5433",
    set: "KP",
    name: "Czempiń",
    isTaken: true,
    isTakenBy: "twis",
    isTakenData: "02.12.2021",
    adres: "ul. Powstańców WLKP dom 15 mieszkanie 25"
}, {
    keyID: "KP_3234",
    set: "KP",
    name: "Mosina",
    isTaken: false,
    isTakenBy: "",
    isTakenData: "",
    adres: "ul.Miś 1"
}, {
    keyID: "KP_3123",
    set: "KP",
    name: "Mosina pod Poznaniem",
    isTaken: false,
    isTakenBy: "",
    isTakenData: "",
    adres: "ul.Misiowa 11 dom 2 mieszkanie 4"
}]


const KeyBox = () => {

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

export default KeyBox;
import { SingleKeyComponent } from 'components';
import { KeyBoxBody, HiddenComponent } from './KeyBox.css';

const keys = [{
    set: "KP",
    name: "Grodzisk WLKP",
    isTaken: true,
    isTakenBy: "twis",
    isTakenData: "02.12.2021",
    adres: "ul.Czereśniowa 20"
}, {
    set: "KP",
    name: "Czempiń",
    isTaken: true,
    isTakenBy: "twis",
    isTakenData: "02.12.2021",
    adres: "ul. Powstańców WLKP dom 15 mieszkanie 25"
}, {
    set: "KP",
    name: "Mosina",
    isTaken: false,
    isTakenBy: "",
    isTakenData: "",
    adres: "ul.Miś 1"
}, {
    set: "KP",
    name: "Mosina pod Poznaniem",
    isTaken: false,
    isTakenBy: "",
    isTakenData: "",
    adres: "ul.Misiowa 11 dom 2 mieszkanie 4"
}]


const KeyBox = () => {
    return (
        <KeyBoxBody>

            <SingleKeyComponent keyData={keys[0]}></SingleKeyComponent>
            <SingleKeyComponent keyData={keys[1]}></SingleKeyComponent>
            <SingleKeyComponent keyData={keys[2]}></SingleKeyComponent>
            <SingleKeyComponent keyData={keys[2]}></SingleKeyComponent>
            <SingleKeyComponent keyData={keys[2]}></SingleKeyComponent>
            <SingleKeyComponent keyData={keys[3]}></SingleKeyComponent>
            <SingleKeyComponent keyData={keys[2]}></SingleKeyComponent>
            <SingleKeyComponent keyData={keys[2]}></SingleKeyComponent>
            <SingleKeyComponent keyData={keys[2]}></SingleKeyComponent>
            <HiddenComponent></HiddenComponent>
            <HiddenComponent></HiddenComponent>
            <HiddenComponent></HiddenComponent>
            <HiddenComponent></HiddenComponent>
            <HiddenComponent></HiddenComponent>

        </KeyBoxBody>
    )
}

export default KeyBox;
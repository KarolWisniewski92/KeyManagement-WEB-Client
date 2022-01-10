import { NavigationWrapper, ButtonWrapper, ConfirmButtonYes, ConfirmButtonNo } from './ConfirmBox.css';
import { StyledText } from "components";

const ConfirmBox = ({ yesCallback, noCallback, title }) => {

    return (
        <NavigationWrapper>
            <StyledText marginVertical="10px" align="center">{title}:</StyledText>
            <ButtonWrapper>
                <ConfirmButtonYes onClick={() => {
                    yesCallback()

                }}>Tak</ConfirmButtonYes>
                <ConfirmButtonNo onClick={() => {
                    noCallback()
                }}>Nie</ConfirmButtonNo>
            </ButtonWrapper>

        </NavigationWrapper>
    )
}

export default ConfirmBox;
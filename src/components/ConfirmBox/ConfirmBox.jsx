import { NavigationWrapper, ButtonWrapper, ConfirmButtonYes, ConfirmButtonNo } from './ConfirmBox.css';
import { StyledText } from "components";

const ConfirmBox = ({ YesCallback, NoCallback, Title }) => {

    return (
        <NavigationWrapper>
            <StyledText marginVertical="10px" align="center">{Title}:</StyledText>
            <ButtonWrapper>
                <ConfirmButtonYes onClick={() => {
                    YesCallback()

                }}>Tak</ConfirmButtonYes>
                <ConfirmButtonNo onClick={() => {
                    NoCallback()
                }}>Nie</ConfirmButtonNo>
            </ButtonWrapper>

        </NavigationWrapper>
    )
}

export default ConfirmBox;
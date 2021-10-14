import { StyledHeaderText, StyledRegularText } from './StyledText.css';
import PropTypes from 'prop-types';

const StyledText = (props) => {
    switch (props.type) {
        case 'header':
            return <StyledHeaderText {...props} ></StyledHeaderText>;

        case 'regular':
            return <StyledRegularText {...props} ></StyledRegularText>;

        default:
            return <StyledRegularText {...props} ></StyledRegularText>;
    }
}

StyledText.propTypes = {
    variant: PropTypes.oneOf(['header', 'regular'])
}

export default StyledText;

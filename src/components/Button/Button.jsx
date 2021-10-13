import React, { useMemo } from 'react';
import { MenuButton, PrimaryButton, SecondaryButton } from './Button.css';
import PropTypes from 'prop-types';

const Button = ({ variant, children, color, size, high }) => {

    const Component = (() => {
        switch (variant) {
            case 'menu':
                return MenuButton

            case 'primary':
                return PrimaryButton

            case 'secondary':
                return SecondaryButton

            default:
                return PrimaryButton
        }
    })();

    const content = (() => (

        <Component color={color} high={high}>
            {children}
        </Component >
    ))();

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    )

}

Button.propTypes = {
    color: PropTypes.oneOf(['red', 'blue', 'green', 'pink', 'yellow', 'orange']),
    variant: PropTypes.oneOf(['menu', 'primary', 'secondary'])
}


export default Button;
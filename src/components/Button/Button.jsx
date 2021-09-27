import React from 'react';
import { PrimaryButton } from './Button.css';

const Button = ({ children }) => {
    return (
        <PrimaryButton>
            {children}
        </PrimaryButton>

    )

}

export default Button;
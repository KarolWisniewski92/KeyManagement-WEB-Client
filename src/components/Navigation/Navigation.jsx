import React from 'react';
import { NavigationWrapper } from './Navigation.css';

const Navigation = ({ children }) => {
    return (
        <NavigationWrapper>{children}</NavigationWrapper>
    )


}

export default Navigation;
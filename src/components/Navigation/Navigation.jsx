import React from 'react';
import { NavigationWrapper } from './Navigation.css';
import { Button } from 'components';
import { Link } from 'react-router-dom';

const Navigation = ({ item }) => {

    const buttons = item.map((el) => {
        // console.log(el);
        return (
            <Link {...el}>
                <Button variant='menu'>{el.content}</Button>
            </Link >)
    })
    return (

        <NavigationWrapper>
            <div>{buttons}</div>
            <Link to="/login">
                <Button variant="secondary" color="yellow">Zaloguj</Button>
            </Link >
        </NavigationWrapper>
    )


}

export default Navigation;
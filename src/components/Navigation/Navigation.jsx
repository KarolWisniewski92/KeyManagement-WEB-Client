import React from 'react';
import { useEffect } from 'react';
import { NavigationWrapper, NavigationMiniWrapper, NavigationWelcomeText, ButtonLogout, SetsBox, NavigationLoginButton, SetButton, NavigationMainWrapper, ButtonBox } from './Navigation.css';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import useLogOut from 'hooks/useLogOut';
import useIsLogged from 'hooks/useIsLogged';
import { useDispatch } from 'react-redux';
import { selectSet } from 'Data/actions/main.action';
import { Fragment } from 'react';
import { useHistory } from "react-router-dom";
import BurgerMenu from 'components/BurgerMenu';

const Navigation = ({ user, loginStatus }) => {
    let logout = useLogOut();
    let isLogged = useIsLogged();
    const dispatch = useDispatch();
    const history = useHistory();
    const userPermision = useSelector(state => state.user.user.role)

    useEffect(() => {
        isLogged.isLogged()
    }, [])

    const setsList = ["KP", "NOC", "DUS"];

    const sets = setsList.map(el => {
        return <SetButton key={el} set={el} onClick={e => {
            if (window.location.pathname !== "/dashboard") {
                history.push('/dashboard')
            }

            selectSet(dispatch, el);
        }}>{el}</SetButton>

    })
    return (

        <NavigationWrapper>
            <NavigationMainWrapper loginStatus={loginStatus}>

                {Object.keys(user).length > 0 &&
                    <SetsBox>
                        {sets}
                    </SetsBox>
                }

                {userPermision === 'admin' &&
                    <BurgerMenu menuTitle="Akcje administratora" items={[
                        {
                            title: "Dodaj klucz",
                            route: "/admin/addKey",
                            disabled: false
                        },
                        {
                            title: "Zarządzaj użytkownikami",
                            route: "/admin/editUser",
                            disabled: true
                        },
                        {
                            title: "Zarządzaj uprawnieniami",
                            route: "/admin/editUserPermision",
                            disabled: true
                        },

                    ]} />

                }

                <NavigationMiniWrapper loginStatus={loginStatus}>
                    {Object.keys(user).length > 0 &&
                        <NavigationWelcomeText>Witaj {user.name} {user.surname}!</NavigationWelcomeText>
                    }
                    {Object.keys(user).length === 0 &&
                        <ButtonBox>
                            <Link to="/login">
                                <NavigationLoginButton>Zaloguj do aplikacji</NavigationLoginButton>
                            </Link >
                            <Link to="/register">
                                <NavigationLoginButton>Zarejestruj</NavigationLoginButton>
                            </Link >
                        </ButtonBox>
                    }
                    {Object.keys(user).length > 0 &&
                        <ButtonLogout
                            type="button"
                            color={'orange'}
                            onClick={logout.logOut}
                        >Wyloguj
                        </ButtonLogout>
                    }
                </NavigationMiniWrapper>
            </NavigationMainWrapper>
        </NavigationWrapper >
    )


}

export default connect(state => {
    return {
        user: state.user.user
    }
}, null)(Navigation);
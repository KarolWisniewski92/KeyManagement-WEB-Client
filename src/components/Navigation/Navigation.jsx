import React from 'react';
import { NavigationWrapper, NavigationMiniWrapper, NavigationWelcomeText, ButtonLogout } from './Navigation.css';
import { Button } from 'components';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from 'Data/actions/user.action';
import useLogOut from 'hooks/useLogOut';
import { useDispatch } from 'react-redux';
import { selectSet } from 'Data/actions/main.action';

const Navigation = ({ item, user, fetchUser }) => {
    let history = useHistory();
    let logout = useLogOut();
    const dispatch = useDispatch();

    const setsList = ["KP", "NOC", "DUS"];

    const sets = setsList.map(el => {
        return <Button key={el} variant='menu' onClick={e => {

            selectSet(dispatch, el);
        }}>{el}</Button>

    })
    return (

        <NavigationWrapper>
            {Object.keys(user).length === 0 &&
                <div></div>
            }

            {Object.keys(user).length > 0 &&
                <div> {sets}</div>
            }
            <NavigationMiniWrapper>
                {Object.keys(user).length > 0 &&
                    <NavigationWelcomeText>Witaj {user.name} {user.surname}!</NavigationWelcomeText>
                }
                {Object.keys(user).length === 0 &&
                    <Link to="/login">
                        <Button variant="secondary" color="yellow" onClick={() => {
                            history.push('/login')
                        }}>Zaloguj</Button>
                    </Link >
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
        </NavigationWrapper >
    )


}

export default connect(state => {
    return {
        user: state.user.user
    }
}, { fetchUser })(Navigation);
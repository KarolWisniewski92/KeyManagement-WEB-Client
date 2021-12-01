import React, { useEffect } from 'react';
import { LoginBox } from './LoginForm.css';
import { Form, Field } from 'react-final-form';
import { Link, useHistory } from 'react-router-dom';
import { Button, Input, StyledText } from 'components';
import API from '../../../../Data/fetch'
import { connect } from 'react-redux';
import { fetchUser } from 'Data/actions/user.action';

const LoginForm = ({ user, fetchUser }) => {
    console.log(user);

    let history = useHistory();

    useEffect(() => {
        API.authentication.checkUser()
            .then(response => response.json())
            .then((data) => {
                if (Object.keys(data).length !== 0) {
                    history.push("/dashboard");
                }
            })
    }, [history])

    const onSubmit = (values) => {

        console.log(values)
        API.authentication.fetchLogIn(values)
            .then(data => {
                console.log(data);
                fetchUser();
                history.push("/dashboard");
            })
            .catch(err => {
                console.log(err);
            })
    };

    const checkUser = () => {
        API.authentication.checkUser()
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            })
    };

    return (
        <LoginBox>
            <StyledText color="white" type="header">Zaloguj się:</StyledText>

            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>

                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} type="email" placeholder="email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} type="text" placeholder="hasło" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="remember" defaultValue={false}>
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} name="remember" id="remember" type="checkbox" />
                                    <label htmlFor="remember">Zapamiętaj mnie! </label>
                                </div>
                            )}
                        </Field>

                        <div className="buttons">
                            <Button type="submit" disabled={submitting || pristine}>
                                Zaloguj
                            </Button>

                            <Button
                                type="button"
                                color={'yellow'}
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Zresetuj
                            </Button>
                            <Button
                                type="button"
                                color={'green'}
                                onClick={checkUser}
                                disabled={submitting || pristine}
                            >
                                Check
                            </Button>

                        </div>
                        <Link to="/register">Nie masz jeszcze konta? Zarejestruj się!</Link>
                    </form>
                )}
            />
        </LoginBox>

    )
}

export default connect(state => {
    return {
        user: state.user.user
    }
}, { fetchUser })(LoginForm);
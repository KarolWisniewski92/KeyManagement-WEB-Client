import React from 'react';
import { LoginForm_H1, LoginBox } from './LoginForm.css';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { Button, Input, StyledText } from 'components';
import API from './../../../../Fetch'

const onSubmit = (values) => {
    console.log(values)
    API.authentication.fetchLogIn(values)
        .catch(err => {
            console.log(err);
        })
}

const checkUser = () => {
    API.authentication.checkUser()
        .then((err, data) => {
            console.log(data);
        })
}

const checkSession = () => {
    API.authentication.checkSession()
        .then((err, data) => {
            console.log(data);
        })
}

const LoginForm = () => {
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
                                    <label for="remember">Zapamiętaj mnie! </label>
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

                            <Button
                                type="button"
                                color={'orange'}
                                onClick={() => {
                                    API.authentication.fetchLogOut();
                                }}
                                disabled={submitting || pristine}
                            >
                                LogOut
                            </Button>

                        </div>
                        <Link to="/register">Nie masz jeszcze konta? Zarejestruj się!</Link>
                    </form>
                )}
            />
        </LoginBox>

    )
}

export default LoginForm;
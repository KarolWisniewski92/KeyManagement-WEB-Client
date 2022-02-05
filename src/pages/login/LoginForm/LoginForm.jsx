import React, { useEffect, useState } from 'react';
import { LoginBox, ErrorBox } from './LoginForm.css';
import { Form, Field } from 'react-final-form';
import { Link, useHistory } from 'react-router-dom';
import { Button, Input, StyledText } from 'components';
import API from '../../../Data/fetch'
import { connect } from 'react-redux';
import { setUserInStore } from 'Data/actions/user.action';

const LoginForm = ({ user, setUserInStore }) => {

    let history = useHistory();
    const [errorText, setTextError] = useState("");

    useEffect(() => {
        API.authentication.checkUser()
            .then(response => response.json())
            .then((data) => {
                if (Object.keys(data).length !== 0) {
                    history.push("/dashboard");
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [history])

    const onSubmit = (values) => {

        API.authentication.fetchLogIn(values)
            .then(response => response.json())
            .then(data => {
                if (data.error === false) {
                    setUserInStore();
                    history.push("/dashboard");
                }
                else {
                    setTextError(data.message)
                }

            })

            .catch(err => {
                console.log(err.message);

                if (err.message === "Failed to fetch") {
                    setTextError("Wystąpił błąd po stronie serwera!")
                }

            })
    };

    const checkUser = () => {
        API.authentication.checkUser()
            .then(response => response.json())
            .then((data) => {
            })
            .catch(err => {
                console.log(err.message);
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

                        </div>
                        {errorText !== "" &&
                            <ErrorBox>
                                <StyledText margin="0px" align="center" color="red">{errorText}</StyledText>
                            </ErrorBox>
                        }

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
}, { setUserInStore })(LoginForm);
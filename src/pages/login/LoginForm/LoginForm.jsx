import React, { useEffect, useState } from 'react';
import { LoginBox, ErrorBox, InputContainer, Form100, ValidationErrorSpan, ButtonBox, Button, FormWrapper } from './LoginForm.css';
import { Form, Field } from 'react-final-form';
import { Link, useHistory } from 'react-router-dom';
import { Input, StyledText } from 'components';
import API from '../../../Data/fetch'
import { connect } from 'react-redux';
import { setUserInStore } from 'Data/actions/user.action';

const LoginForm = ({ user, setUserInStore }) => {

    let history = useHistory();
    const [errorText, setTextError] = useState("");
    const required = value => (value ? undefined : 'Wymagane');

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

    return (
        <LoginBox>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <Form100 onSubmit={handleSubmit}>
                        <FormWrapper>
                            <StyledText align="center" color="white" type="header" marginVertical="10px">Zaloguj się:</StyledText>
                            <Field
                                name="email"
                                validate={required}>
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="email" placeholder="email" />
                                    </InputContainer>
                                )}
                            </Field>

                            <Field
                                name="password"
                                validate={required}>
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="password" placeholder="hasło" />
                                    </InputContainer>
                                )}
                            </Field>

                            <Field name="remember" defaultValue={false}>
                                {({ input, meta }) => (
                                    <InputContainer>
                                        <Input {...input} name="remember" id="remember" type="checkbox" />
                                        <label htmlFor="remember">Zapamiętaj mnie! </label>
                                    </InputContainer>
                                )}
                            </Field>

                            {errorText !== "" &&
                                <ErrorBox>
                                    <StyledText margin="0px" align="center" color="red">{errorText}</StyledText>
                                </ErrorBox>
                            }

                            <StyledText align="center" marginVertical="5px">
                                <Link to="/register">Nie masz jeszcze konta?<br />Zarejestruj się!</Link>
                            </StyledText>
                        </FormWrapper>
                        <ButtonBox>
                            <Button type="submit" disabled={submitting || pristine}>
                                Zaloguj
                            </Button>

                            <Button
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Zresetuj
                            </Button>

                        </ButtonBox>
                    </Form100>
                )}
            />
        </LoginBox >

    )
}

export default connect(state => {
    return {
        user: state.user.user
    }
}, { setUserInStore })(LoginForm);
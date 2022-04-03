import { RegisterBox, InputContainer, Form100, ButtonBox, ValidationErrorSpan, FormWrapper, Button, ErrorBox } from "./RegisterForm.css";
import { Input, StyledText } from 'components';
import { Form, Field } from 'react-final-form';
import API from '../../../Data/fetch'
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RegisterForm = () => {

    const [errorText, setTextError] = useState("");
    const [errorTextColor, setTextErrorColor] = useState("red");
    let history = useHistory();

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

    const onSubmit = async (values, form) => {
        API.authentication.fetchRegister(values)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setTextError(data.message)
                    setTextErrorColor("red");

                }
                else {
                    setTextError(data.message)
                    setTextErrorColor("green");
                    Object.keys(values).forEach(el => {
                        form.change(el, undefined)
                        form.resetFieldState(el)

                    })
                }
                console.log(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    };

    return (
        <RegisterBox>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, reset, form, submitting, pristine, values }) => (
                    <Form100 onSubmit={handleSubmit}>
                        <FormWrapper>
                            <StyledText align="center" color="white" type="header" margin="0px 0px 20px 0px">Zarejestruj się!</StyledText>
                            <Field
                                name="name"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="text" placeholder="Imię" />
                                    </InputContainer>
                                )}
                            </Field>

                            <Field
                                name="surname"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="text" placeholder="Nazwisko" />
                                    </InputContainer>
                                )}
                            </Field>

                            <Field
                                name="email"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="email" placeholder="Adres email" />
                                    </InputContainer>
                                )}
                            </Field>

                            <Field
                                name="phone"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="phone" placeholder="Numer telefonu" />
                                    </InputContainer>
                                )}
                            </Field>

                            <Field
                                name="password"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="password" placeholder="Hasło" />
                                    </InputContainer>
                                )}
                            </Field>
                            <Field
                                name="repeatPassword"
                                validate={required}
                            >
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="password" placeholder="Powtórz hasło" />
                                    </InputContainer>
                                )}
                            </Field>

                            {errorText !== "" &&
                                <ErrorBox>
                                    <StyledText margin="0px" align="center" color={errorTextColor}>{errorText}</StyledText>
                                </ErrorBox>
                            }

                        </FormWrapper>

                        <ButtonBox>
                            <Button
                                type="submit"
                                color="blue"
                                disabled={submitting}
                            >
                                Zarejestruj się!</Button>

                            <Button
                                type="button"
                                onClick={() => {
                                    form.restart();
                                    setTextError("");
                                    setTextErrorColor("red");
                                }
                                }
                                disabled={submitting}
                            >
                                Wyczyść!</Button>
                        </ButtonBox>

                    </Form100>
                )}
            />
        </RegisterBox >
    )
}

export default RegisterForm;
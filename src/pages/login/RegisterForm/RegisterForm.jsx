import { RegisterBox, InputContainer, Form100, ButtonBox, ValidationErrorSpan } from "./RegisterForm.css";
import { Input, Button, StyledText } from 'components';
import { Form, Field } from 'react-final-form';
import API from '../../../Data/fetch'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';


const onSubmit = (values) => {
    API.authentication.fetchRegister(values)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err.message);
        })
};

const RegisterForm = () => {

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

    return (
        <RegisterBox>
            <StyledText align="center" color="white" type="header">Zarejestruj się!</StyledText>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <Form100 onSubmit={handleSubmit}>

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
                        <ButtonBox>
                            <Button
                                type="submit"
                                color="blue"
                                disabled={submitting || pristine}
                            >
                                Zarejestruj się!</Button>

                            <Button
                                type="button"
                                color={'yellow'}
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Wyczyść!</Button>
                        </ButtonBox>


                    </Form100>
                )}
            />



        </RegisterBox>
    )
}

export default RegisterForm;
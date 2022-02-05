import { RegisterBox } from "./RegisterForm.css";
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
            <StyledText color="white" type="header">Zarejestruj się!</StyledText>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>

                        <Field name="name">
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} type="text" placeholder="Imię" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="surname">
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} type="text" placeholder="Nazwisko" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} type="email" placeholder="Adres email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="phone">
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} type="phone" placeholder="Numer telefonu" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} type="password" placeholder="Hasło" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="repeatPassword">
                            {({ input, meta }) => (
                                <div>
                                    <Input {...input} type="password" placeholder="Powtórz hasło" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

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

                    </form>
                )}
            />



        </RegisterBox>
    )
}

export default RegisterForm;
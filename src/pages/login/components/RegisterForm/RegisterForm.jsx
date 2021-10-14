import { RegisterBox } from "./RegisterForm.css";
import { Input, Button, HeaderText } from 'components';
import { Form, Field } from 'react-final-form';

const onSubmit = (values) => {
    console.log(values);
};

const RegisterForm = () => {
    return (
        <RegisterBox>
            <HeaderText color="white">Zarejestruj się!</HeaderText>
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
                            color="Blue"
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
import React, { Fragment } from 'react';
import { LoginForm_H1, Input, LoginBox } from './LoginForm.css';
import { Form, Field } from 'react-final-form'
import { Button } from 'components';

const onSubmit = (values) => { console.log(values) }

const LoginForm = () => {
    return (
        <LoginBox>
            <LoginForm_H1>Zaloguj się:</LoginForm_H1>

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

                        <div>
                            <Input id="remember" type="checkbox" />
                            <label for="remember">Zapamiętaj mnie! </label>
                        </div>

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
                    </form>
                )}
            />
        </LoginBox>

    )
}

export default LoginForm;
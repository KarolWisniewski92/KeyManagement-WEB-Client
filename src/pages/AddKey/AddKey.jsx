import { AddKeyBody, AddKeyFormBody, AddKeyFormButtonBar, Input, FormButton, CheckBoxGroup, CheckBoxSingleBody, SelectPhotoBody, SelectPhotoSingleBody, KeyImage, ValidationErrorSpan } from './AddKey.css';
import { StyledText } from 'components';
import { Form, Field } from 'react-final-form';
import images from '../../image/png/keys';
import { useState } from 'react';

const AddKey = () => {

    const required = value => (value ? undefined : 'Wymagane');


    const onSubmit = (values) => {
        console.log(values);

    }

    const sets = ["KP", "NOC", "DUS"];

    const Error = ({ name }) => (
        <Field
            name={name}
            subscription={{ touched: true, error: true }}
            render={({ meta: { touched, error } }) =>
                touched && error ? <ValidationErrorSpan>{error}</ValidationErrorSpan> : null
            }
        />
    )

    return (
        <AddKeyBody>
            <AddKeyFormBody>
                <StyledText type="header" align="center">
                    Dodaj klucz!
                </StyledText>

                {/*
            name: "Czempiń (pow. Kościański)",
            adres: "ul. Przedszkolna 1",
            owner: "WSS",
            set: "NOC",
            imageID: 2 */}

                <Form
                    onSubmit={onSubmit}
                    validate={values => {
                        const errors = {
                        }

                        if (values.set === undefined || values.set.length === 0) {
                            errors.set = "Pole wymagane!"
                        }
                        if (values.photo === undefined || values.photo.length === 0) {
                            errors.photo = "Pole wymagane!"
                        }
                        return errors
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>

                            <Field
                                name="name"
                                validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="text" placeholder="Nazwa" />
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="adres"
                                validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="text" placeholder="Adres" />
                                    </div>
                                )}
                            </Field>

                            <Field
                                name="owner"
                                validate={required}>
                                {({ input, meta }) => (
                                    <div>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="text" placeholder="Właściciel" />
                                    </div>
                                )}
                            </Field>
                            <StyledText align="center">Dodaj do zestawu:</StyledText>
                            <Error name="set" />

                            <CheckBoxGroup>
                                {sets.map(el => {
                                    return (
                                        <Field
                                            key={el}
                                            name="set"
                                            component="input"
                                            type="checkbox"
                                            value={el}
                                            id={el}
                                        >

                                            {({ input, meta }) => (
                                                <CheckBoxSingleBody>
                                                    <Input {...input} type="checkbox" />
                                                    <label htmlFor="set">{el} </label>
                                                </CheckBoxSingleBody>)
                                            }
                                        </Field>
                                    )
                                })}
                            </CheckBoxGroup>

                            <StyledText align="center">Wybierz zdjęcie:</StyledText>
                            <Error name="photo" />
                            <SelectPhotoBody>
                                {images.map((el, index) => {
                                    return (
                                        <Field
                                            key={el}
                                            name="photo"
                                            component="input"
                                            type="checkbox"
                                            value={index}
                                            id={index}
                                        >
                                            {({ input, meta }) => (
                                                <SelectPhotoSingleBody>
                                                    <KeyImage src={images[index]} />
                                                    <Input {...input} type="checkbox" />
                                                </SelectPhotoSingleBody>
                                            )
                                            }
                                        </Field>
                                    )
                                })}






                            </SelectPhotoBody>


                            <AddKeyFormButtonBar>
                                <FormButton
                                    type="submit"
                                    color="blue"
                                    disabled={submitting || pristine}
                                >
                                    Dodaj klucz!</FormButton>

                                <FormButton
                                    type="button"
                                    color={'yellow'}
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Wyczyść!</FormButton>
                            </AddKeyFormButtonBar>
                        </form>
                    )}
                />
            </AddKeyFormBody>
        </AddKeyBody>
    )
}

export default AddKey;
import { AddKeyBody, AddKeyFormBody, AddKeyFormButtonBar, Input, FormButton, CheckBoxGroup, CheckBoxSingleBody, SelectPhotoBody, SelectPhotoSingleBody, KeyImage, ValidationErrorSpan,InputContainer } from './AddKey.css';
import { StyledText } from 'components';
import { Form, Field } from 'react-final-form';
import images from '../../image/png/keys';
import { fetchAddNewKey } from 'Data/fetch/admin.fetch';
import { addNotification } from 'Data/actions/notification.action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const AddKey = () => {

    useEffect(() => {
        if (userPermision !== "admin") {
            history.push('/dashboard');
        }

    }, [])

    const history = useHistory();
    const dispatch = useDispatch();
    const userPermision = useSelector(state => state.user.user.role)

    const sets = ["KP", "NOC", "DUS"];

    const required = value => (value ? undefined : 'Wymagane');


    const onSubmit = (values) => {
        const newKeyData = values;
        fetchAddNewKey(newKeyData)
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    addNotification(dispatch, {
                        type: "success",
                        title: "Sukces",
                        message: "Poprawnie dodano klucz!"
                    })
                } else {
                    addNotification(dispatch, {
                        type: "faile",
                        title: "Wystąpił błąd!",
                        message: data.message
                    })
                }
            })
    }


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
                                    <InputContainer >
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="text" placeholder="Nazwa" />
                                    </InputContainer>
                                )}
                            </Field>

                            <Field
                                name="adres"
                                validate={required}>
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="text" placeholder="Adres" />
                                    </InputContainer>
                                )}
                            </Field>

                            <Field
                                name="owner"
                                validate={required}>
                                {({ input, meta }) => (
                                    <InputContainer>
                                        {meta.error && meta.touched && <ValidationErrorSpan>{meta.error}</ValidationErrorSpan>}
                                        <Input {...input} type="text" placeholder="Właściciel" />
                                    </InputContainer>
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
                                    disabled={submitting}
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
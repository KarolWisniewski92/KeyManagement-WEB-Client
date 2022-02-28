import { AddKeyBody, AddKeyFormBody, AddKeyFormButtonBar, Input, FormButton, CheckBoxGroup, CheckBoxSingleBody, SelectPhotoBody, SelectPhotoSingleBody, KeyImage } from './AddKey.css';
import { StyledText } from 'components';
import { Form, Field } from 'react-final-form';
import images from '../../image/png/keys';

const AddKey = () => {


    const onSubmit = (test) => {
        console.log(test);

    }

    const sets = ["KP", "NOC", "DUS"];


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
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>

                            <Field name="name">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" placeholder="Nazwa" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <Field name="adres">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" placeholder="Adres" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <Field name="owner">
                                {({ input, meta }) => (
                                    <div>
                                        <Input {...input} type="text" placeholder="Właściciel" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <StyledText align="center">Dodaj do zestawu:</StyledText>

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
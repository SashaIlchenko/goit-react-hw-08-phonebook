import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { Formik } from 'formik';
import { Form, FormField, Input, AddBtn } from './ContactForm.styled';
import { addContact } from 'Redux/contacts/Operations';
import { selectContacts } from 'Redux/contacts/Selectors';
import { toast } from 'react-hot-toast';
const initialValues = {
    name: '',
    number: '',
};

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const handleSubmit = (values, { resetForm }) => {
        const newContact = contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase())
        if (newContact) {
            resetForm();
            return toast.error(`${values.name} is already in contacts`)

        }
        dispatch(addContact({
            ...values,
        }))
        resetForm();
    }

    return <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
    >
        <Form>
            < FormField>Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder="Name"
                /></ FormField>
            < FormField>Number
                <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Number"
                />
            </ FormField>
            <AddBtn type="submit">Add contact</AddBtn>
        </Form>
    </Formik>
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "Redux/auth/Operations";
import { Form, FormField, Input, Title, SubBtn } from "./RegisterForm.styled";

const initialValues = {
    name: '',
    email: '',
    password: '',
};
export const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        dispatch(register({
            ...values
        }))
        console.log(values)
        resetForm();
    }
    return <Formik initialValues={initialValues}
        onSubmit={handleSubmit}>
        <Form><Title >Registration form</Title ><FormField>Name<Input
            type="text"
            name="name"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required /></FormField>
            <FormField>Email<Input
                type="email"
                name="email"
                placeholder="Email"
                required /></FormField>
            <FormField>Password<Input
                type='password'
                name='password'
                placeholder="Password"
                required
            /></FormField>
            <SubBtn type='submit'>Register</SubBtn></Form>
    </Formik>
}
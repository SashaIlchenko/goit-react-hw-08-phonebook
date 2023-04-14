import { Formik } from "formik";
import { login } from "Redux/auth/Operations";
import { useDispatch } from "react-redux";
import { Form, FormField, Input, Title, SubBtn } from "components/RegisterForm/RegisterForm.styled";
const initialValues = {
    email: '',
    password: '',
};

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, { resetForm }) => {
        dispatch(login({ ...values }))
        resetForm();
    }
    return <Formik initialValues={initialValues}
        onSubmit={handleSubmit}>
        <Form><Title>Log in form</Title>
            <FormField>Email< Input
                type="email"
                name="email"
                placeholder="Email"
                required /></FormField>
            <FormField>Password< Input
                type='password'
                name='password'
                placeholder="Password"
                required
            /></FormField><SubBtn type='submit'>Log in</SubBtn ></Form>
    </Formik>
}
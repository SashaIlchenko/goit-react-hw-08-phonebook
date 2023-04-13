import { Formik, Form, Field } from "formik";
import { login } from "Redux/auth/Operations";
import { useDispatch } from "react-redux";
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
        <Form>
            <label>Email<Field
                type="email"
                name="email"
                placeholder="Email"
                required /></label>
            <label>Password<Field
                type='password'
                name='password'
                placeholder="Password"
                required
            /></label><button type='submit'>Log in</button></Form>
    </Formik>
}
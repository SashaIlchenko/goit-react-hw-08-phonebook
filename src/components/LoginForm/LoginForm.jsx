import { Formik, Form, Field } from "formik";
const initialValues = {
    email: '',
    password: '',
};

export const LoginForm = () => {
    return <Formik initialValues={initialValues}>
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
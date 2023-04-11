import { Formik, Form, Field } from "formik";
const initialValues = {
    userName: '',
    email: '',
    password: '',
};
export const RegisterForm = () => {
    return <Formik initialValues={initialValues}>
        <Form><label>Name<Field
            type="text"
            name="UserName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required /></label>
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
            /></label>
            <button type='submit'>Register</button></Form>
    </Formik>
}
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "Redux/auth/Operations";
// import { selectUser } from "Redux/auth/Selectors";

const initialValues = {
    name: '',
    email: '',
    password: '',
};
export const RegisterForm = () => {
    const dispatch = useDispatch();
    // const user = useSelector(selectUser);
    const handleSubmit = (values, { resetForm }) => {
        dispatch(register({
            ...values
        }))
        console.log(values)
        resetForm();
    }
    return <Formik initialValues={initialValues}
        onSubmit={handleSubmit}>
        <Form><label>Name<Field
            type="text"
            name="name"
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
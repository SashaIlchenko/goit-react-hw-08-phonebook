import { fetchContacts } from 'Redux/contacts/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
// import { AppBar } from './AppBar/AppBar';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
// import { Container } from './App.styled';
import { selectIsLoading, selectError } from 'Redux/contacts/Selectors';
// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { LoginForm } from './LoginForm/LoginForm';
const PhonebookPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    return (
        // <Container >
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            {isLoading && !error && <b>Request in progress...</b>}
            <h2>Contacts</h2>
            <Filter />
            <ContactList /></>)
    // </Container >)
}

export default PhonebookPage;
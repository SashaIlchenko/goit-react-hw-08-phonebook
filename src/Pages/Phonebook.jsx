import { fetchContacts } from 'Redux/contacts/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { selectIsLoading, selectError } from 'Redux/contacts/Selectors';

const PhonebookPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    return (

        <>
            <h1>Phonebook</h1>
            <ContactForm />
            {isLoading && !error && <b>Request in progress...</b>}
            <h2>Contacts</h2>
            <Filter />
            <ContactList /></>)

}

export default PhonebookPage;
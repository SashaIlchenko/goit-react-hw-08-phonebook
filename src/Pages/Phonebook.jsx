import { fetchContacts } from 'Redux/contacts/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { selectIsLoading, selectError } from 'Redux/contacts/Selectors';
import { Title, ListTitle, Container } from './Phonebook.styled';

const PhonebookPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    return (

        < Container>
            <Title>Phonebook</Title>
            <ContactForm />
            {isLoading && !error && <b>Request in progress...</b>}
            <ListTitle>Contacts</ListTitle>
            <Filter />
            <ContactList /></ Container>)
}

export default PhonebookPage;
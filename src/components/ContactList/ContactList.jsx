import PropTypes from 'prop-types';
import { DeleteBtn, Items, Item } from './ContactList.styled';
import { deleteContact } from 'Redux/contacts/Operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'Redux/contacts/Selectors';
export const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);
    return <  Items  >
        {contacts.map(contact => (<Item key={contact.id}>{contact.name}: {contact.number}<DeleteBtn type='button' onClick={() => dispatch(deleteContact(contact.id))}>Delate</DeleteBtn ></Item>))}
    </ Items  >
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }),
    ),
}
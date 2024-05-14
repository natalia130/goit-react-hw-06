import css from './ContactList.module.css';
import Contact from '../contact/Contact.jsx';
import { useSelector } from 'react-redux';
import { selectContactsItems } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
    const contacts = useSelector(selectContactsItems);
    const filter = useSelector(selectNameFilter);
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <ul className={css.contacts}>
                { filteredContacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Contact
                                id={contact.id}
                                name={contact.name}
                                number={contact.number}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ContactList;
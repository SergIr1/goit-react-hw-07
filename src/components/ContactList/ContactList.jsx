import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
// import { selectContacts } from '../../redux/contactsSlice';
// import { selectNameFilter } from '../../redux/filtersSlice';
import { selectFilteredContacts } from '../../redux/contactsSlice';
// import { deleteContact } from '../../redux/contactsOps';

export default function ContactList() {
  // const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectNameFilter);

  // const filteredContacts = contacts.filter(contact => {
  //   // console.log(contact);
  //   return contact.name.toLowerCase().includes(filter.toLowerCase());
  // });

  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <Contact
              data={contact}
              // onDelete={id => dispatch(deleteContact(id))}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

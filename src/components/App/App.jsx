import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <p className={css.error}>Error, plz reload page...</p>}
      {isLoading && <p className={css.text}>Loading...</p>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

import { useId } from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.js';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Number is required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handeleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    console.log('Dispatching action:', newContact);

    dispatch(addContact(newContact));
    // onAdd(newContact);
    actions.resetForm();
  };

  const filedId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handeleSubmit}
    >
      <Form className={css.form}>
        <label className={css.textLabel} htmlFor={`${filedId}-name`}>
          Name
        </label>
        <Field
          className={css.input}
          placeholder="Your name"
          type="text"
          name="name"
          id={`${filedId}-name`}
        />
        <ErrorMessage className={css.error} name="name" component={'span'} />
        <label className={css.textLabel} htmlFor={`${filedId}-number`}>
          Number
        </label>
        <Field
          className={css.input}
          placeholder="Your number"
          type="tel"
          name="number"
          id={`${filedId}-number`}
        />
        <ErrorMessage className={css.error} name="number" component={'span'} />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

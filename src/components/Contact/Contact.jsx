import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handeleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.container}>
      <div>
        <div className={css.wrapper}>
          <FaUser className={css.icon} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.wrapper}>
          <BsFillTelephoneFill className={css.icon} />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      {/* <button className={css.button} type="button" onClick={() => onDelete(id)}> */}
      <button className={css.button} type="button" onClick={handeleDelete}>
        Delete
      </button>
    </div>
  );
}

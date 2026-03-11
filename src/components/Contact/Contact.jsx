import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </div>
  );
}
import s from "./styles.module.css";

const ContactList = ({ filteredContact, onDeleteContact }) => (
  <div className={s.contact_container}>
    <ul className={s.contact_form}>
      {filteredContact.map(({ id, name, number }) => {
        return (
          <li className={s.contactlist} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);

export default ContactList;

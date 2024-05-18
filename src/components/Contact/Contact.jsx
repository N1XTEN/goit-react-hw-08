import { useState } from 'react';
import PropTypes from 'prop-types';
import { BiSolidEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import css from './Contact.module.css';
import ModalDelete from '../ModalDelete/ModalDelete';
import ModalEdit from '../ModalEdit/ModalEdit';

const Contact = ({ contact }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact(prevContact => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    
    setIsEditModalOpen(false);
  };

  const handleDelete = () => {
    
    setIsModalOpen(false);
  };

  return (
    <li className={css.list}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <div className={css.wrap}>
        <button type="button" className={css.btn} onClick={() => setIsEditModalOpen(true)}>
          <BiSolidEditAlt className={css.icon} />
        </button>
        <button type="button" className={css.btn} onClick={() => setIsModalOpen(true)}>
          <RiDeleteBin6Line className={css.icon} />
        </button>
      </div>
      <ModalDelete
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onDelete={handleDelete}
      />
      <ModalEdit
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contact={editedContact}
        handleChange={handleChange}
        onSubmit={handleEdit}
      />
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;

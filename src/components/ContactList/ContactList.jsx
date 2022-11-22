import propTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = function ({ filterContacts, onDelete }) {
  return (
    <List>
      {filterContacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          onDelete={onDelete} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filterContacts: propTypes.array.isRequired,
  onDelete: propTypes.func.isRequired,
};
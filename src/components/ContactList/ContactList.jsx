import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

const filteredList = (contacts, filter) => {
  let filterContactsList = null;
  if (filter === '') {
    filterContactsList = contacts;
    return filterContactsList;
  }
  const normalizedFilter = filter.toLowerCase();
  filterContactsList = contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(normalizedFilter)
  );
  if (filterContactsList.length < 1) {
    window.alert('No matches =(');
  }
  return filterContactsList;
};
export const ContactList = () => {
  const states = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filterContacts = filteredList(states.contacts, filter.filter);
  return (
    <List>
      {filterContacts.map(state => {
        return (
          <ContactItem
            key={state.id}
            name={state.text.name}
            id={state.id}
            number={state.text.number}
          />
        );
      })}{' '}
    </List>
  );
};

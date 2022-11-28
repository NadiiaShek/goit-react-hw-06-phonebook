import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Container, TitlePhoneBook, TitleContacts } from './AppStyled';

export default function App() {
  return (
    <Container>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <ContactFilter />
      <ContactList />
    </Container>
  );
}

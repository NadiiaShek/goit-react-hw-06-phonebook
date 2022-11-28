import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactSlice';
import { selectContacts } from 'redux/selectors';
import { Formik } from 'formik';
import { MainForm, AddButton, FormLabel, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.contacts.some(
        contact =>
          contact.text.name.toLowerCase() === values.name.toLowerCase().trim()
      )
    ) {
      window.alert('Such a contact exists');
    }
    if (
      !contacts.contacts.some(
        contact =>
          contact.text.name.toLowerCase() === values.name.toLowerCase().trim()
      )
    ) {
      dispatch(addContacts(values));
      window.alert('Contact created');
    }
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <MainForm autoComplete="off">
        <div>
          <FormLabel htmlFor="name">Name</FormLabel>
          <div>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
        </div>
        <div>
          <FormLabel htmlFor="number">Number</FormLabel>
          <div>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
        </div>
        <AddButton type="submit">Add contact</AddButton>
      </MainForm>
    </Formik>
  );
};

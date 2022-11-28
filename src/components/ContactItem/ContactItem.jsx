import { Item, DelButton } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DelButton>
    </Item>
  );
};

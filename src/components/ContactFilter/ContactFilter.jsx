import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { FilterBox, FilterInput } from './ContactFilter.styled';
import { FormLabel } from '../ContactForm/ContactForm.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(addFilter(e.currentTarget.value));
  };
  return (
    <FilterBox>
      <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
      <div>
        <FilterInput type="text" name="filter" onChange={onFilter} />
      </div>
    </FilterBox>
  );
};

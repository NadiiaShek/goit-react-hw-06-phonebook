import propTypes from 'prop-types';
import { FilterBox, FilterInput } from './ContactFilter.styled';
import { FormLabel } from '../ContactForm/ContactForm.styled';

export const ContactFilter = ({ filter, onFilter }) => {
  return (
    <FilterBox>
      <FormLabel htmlFor="filter">Find contacts by name</FormLabel>
      <div>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
        />
      </div>
    </FilterBox>
  );
};

ContactFilter.propTypes = {
  onFilter: propTypes.func,
  filter: propTypes.string,
};
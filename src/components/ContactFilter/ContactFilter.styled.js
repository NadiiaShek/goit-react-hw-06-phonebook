import styled from 'styled-components';


export const FilterBox = styled.div`
  width: 240px;
  margin-bottom: 20px;
  
`;

export const FilterInput = styled.input`
  border: 0;
  outline: 0;
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  background-color: #e8f2f6;
  font-size: 16px;
  font-weight: 600;
  box-shadow: inset 2px 2px 5px,
    inset -5px -5px 10px white;
  transition: all 0.2s ease-in-out;
  appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px var(--color-shadow),
      inset -1px -1px 2px var(--color-white);
  }
`;
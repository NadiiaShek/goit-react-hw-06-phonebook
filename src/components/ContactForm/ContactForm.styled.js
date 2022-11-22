import styled from 'styled-components';
import { Form, Field } from 'formik';


export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  background-color: #abdbe3;;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);
`;

export const Input = styled(Field)`
  border: 0;
  outline: 0;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 5px;
  background-color: #e8f2f6;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  box-shadow: inset 2px 2px 5px,
    inset -5px -5px 10px white;
  transition: all 0.2s ease-in-out;
  appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px var(--color-shadow),
      inset -1px -1px 2px var(--color-white);
  }
`;

export const FormLabel = styled.label`

  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  width: 300 px;
  padding: 15px 20px;
  background-color: #3086b2;
  color: dark blue;
  border-radius: 10px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  cubic-bezier(.17,.67,.57,.48);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #1e81b0;
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

`;
export const Container = styled.div`
  padding: 20px 20px;
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 380px;
  border-radius: 10px;
  background-color: #abdbe3;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
    0px 2px 1px rgba(0, 0, 0, 0.32);
`;
export const TitlePhoneBook = styled.h1`
  
  width: 240 px;
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #0a3044;
  text-shadow: 1px 1px 1px #e8f2f6;
`;

export const TitleContacts = styled.h2`
  
  width: 240 px;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 28px;
  color: #0a3044;
  text-shadow: 1px 1px 1px #e8f2f6;
`;
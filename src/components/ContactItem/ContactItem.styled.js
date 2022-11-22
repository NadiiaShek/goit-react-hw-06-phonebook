import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DelButton = styled.button`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 5px 10px;
  background-color: #abdbe3;
  color: black;
  border-radius: 10px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  cubic-bezier (.17,.67,.57,.48);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #a91937;
   box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;

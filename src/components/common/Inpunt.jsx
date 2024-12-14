import styled from 'styled-components';

const Input = styled.input`

  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  color: #555;
  font-size: 16px;
  font-weight: 400;

  &::placeholder {

   color: #555;

  }

  &:focus{

   border: 2px solid #555;

  }
 
  &:focus::placeholder {
  
    color: #181818;

 }

 &:disabled {

    background-color: #f6f6f6;

 }

  &:disabled::placeholder{

    color: #999;

  }
  
`;

export default Input;
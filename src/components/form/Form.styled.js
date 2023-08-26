import { styled } from 'styled-components';

export const FormInput = styled.form`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 1000px;
  height: 50px;
  padding: 8px;
  font-size: 24px;
  border-radius: 4px;
  border: 3px solid #111111;
  margin-bottom: 20px;
`;
export const TitleInput = styled.label`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const AddButton = styled.button`
  padding: 10px;
  background-color: #e0e0e0;
  border-radius: 3px;
  transition: background-color 250ms linear, transform 250ms ease-in-out;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #99ff99;
    transform: scale(1.2);
  }
`;

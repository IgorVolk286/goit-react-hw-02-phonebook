import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 350px;
  height: 120px;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid black;

  background-color: #f6f6f6;
`;
export const Text = styled.p`
  width: 300px;
  font-size: 24px;
  font-weight: 400;
  font-style: italic;
`;

export const ButtonDelete = styled.button`
  padding: 8px;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  font-style: italic;
  background-color: aqua;
  border-radius: 5px;
  :hover {
    background: yellowgreen;
  }
`;

import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;

  padding: 8px 16px;
  border: 1px solid #db610d;
  border-radius: 4px;
  color: #db610d;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 16px;
  }
  :hover,
  :focus {
    background-color: #db610d;
    color: white;
    transition: all 0.2s;
  }
`;

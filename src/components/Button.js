// src/components/Button.js
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;

// src/components/Card.js
import styled from 'styled-components';

const Card = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.color};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export default Card;

// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

const Navbar = ({ toggleTheme }) => {
  return (
    <NavbarContainer>
      <h1>Dashboard</h1>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </NavbarContainer>
  );
};

export default Navbar;

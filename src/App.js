// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/theme';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import GlobalStyles from './components/GlobalStyles';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} />
        <Dashboard />
      </>
    </ThemeProvider>
  );
}

export default App;

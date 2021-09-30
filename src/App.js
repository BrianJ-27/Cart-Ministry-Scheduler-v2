import React from 'react';
import LoginScreen from './login/LoginPage';
import { ThemeProvider } from '@material-ui/styles';
import theme from './scss/theme';
import LoginPage from './login/LoginPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;

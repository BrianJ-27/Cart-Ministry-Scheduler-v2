import React from 'react';
import DashboardTest from './components/Dashboard';
import { ThemeProvider } from '@material-ui/styles';
import theme from './scss/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardTest />
    </ThemeProvider>
  );
};

export default App;

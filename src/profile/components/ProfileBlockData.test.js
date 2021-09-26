import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProfileBlockData from './ProfileBlockData';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../scss/theme';

const renderProfileBlockData = (firstName, lastName, role) => {
  return render(
    <ThemeProvider theme={theme}>
      <ProfileBlockData firstName={firstName} lastName={lastName} role={role} />
    </ThemeProvider>
  );
};

afterEach(cleanup);

test('Displays user data', () => {
  const expectedFirstName = 'Nestor';
  const expectedLastName = 'Padilla';
  const expectedRole = 'publisher';

  const { getByTestId } = renderProfileBlockData(expectedFirstName, expectedLastName, expectedRole);

  expect(getByTestId('name')).toHaveTextContent(`${expectedFirstName} ${expectedLastName}`);
  expect(getByTestId('role')).toHaveTextContent(expectedRole);
});

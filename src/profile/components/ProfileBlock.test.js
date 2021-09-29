import { ThemeProvider } from '@material-ui/styles';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import theme from '../../scss/theme';
import ProfileBlock from './ProfileBlock';

const renderProfileBlock = (userProfile) => {
  return render(
    <ThemeProvider theme={theme}>
      <ProfileBlock userProfile={userProfile} />
    </ThemeProvider>
  );
};

afterEach(cleanup);

test('Ensure component renders without crashing', () => {
  const userProfile = {
    profilePicture: 'https://some.url.com',
    firstName: 'Saul',
    lastName: 'ofTarsis',
    role: 'Co-Ruler',
  };

  const expectedName = `${userProfile.firstName} ${userProfile.lastName}`;

  const { getByTestId } = renderProfileBlock(userProfile);

  expect(getByTestId('name')).toHaveTextContent(expectedName);
  expect(getByTestId('role')).toHaveTextContent(userProfile.role);
});

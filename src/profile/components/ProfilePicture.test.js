import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProfilePicture from './ProfilePicture';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../scss/theme';

const renderProfilePicture = (imgSource) => {
  return render(
    <ThemeProvider theme={theme}>
      <ProfilePicture profilePicture={imgSource} />
    </ThemeProvider>
  );
};

afterEach(cleanup);

test('Displays the users profile', () => {
  const expectedImageSource = 'https://some.url.com';

  const { getByTestId } = renderProfilePicture(expectedImageSource);
  expect(getByTestId('picture').getAttribute('src')).toEqual(expectedImageSource);
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProfileBlock from './ProfileBlock';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../scss/theme';

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

  //This is a very simple component that is only there to arrange
  //it's children. Just make sure it renders without crashing
  renderProfileBlock(userProfile);
});

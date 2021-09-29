import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { FlexBox } from '../../shared/FlexBox';
import ProfilePicture from './ProfilePicture';

export default function ProfileBlock({ userProfile }) {
  const classes = useStyles();
  const fullName = `${userProfile.firstName} ${userProfile.lastName}`;

  return (
    <FlexBox>
      <ProfilePicture profilePicture={userProfile.profilePicture} />
      <FlexBox flexDirection="column" flexWrap="wrap" padding="15px 5px">
        <div data-testid="name" className={classes.userName}>
          {fullName}
        </div>
        <div data-testid="role" className={classes.userRole}>
          {userProfile.role}
        </div>
      </FlexBox>
    </FlexBox>
  );
}

const useStyles = makeStyles(
  (theme) => ({
    userName: {
      fontSize: theme.fonts.baseFontSize,
    },
    userRole: {
      fontSize: theme.fonts.smallFontSize,
      color: theme.colors.sereneMidnight,
    },
  }),
  { name: 'ProfileBlock' }
);

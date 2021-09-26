import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ProfilePicture from './ProfilePicture';
import ProfileBlockData from './ProfileBlockData';

export default function ProfileBlock({ userProfile }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProfilePicture profilePicture={userProfile.profilePicture} />
      <ProfileBlockData
        firstName={userProfile.firstName}
        lastName={userProfile.lastName}
        role={userProfile.role}
      />
    </div>
  );
}

const useStyles = makeStyles(
  (theme) => ({
    ...theme,
    root: {
      display: 'flex',
      flexFlow: 'column no-wrap',
      color: theme.colors.black,
      width: '100%',
    },
  }),
  { name: 'ProfileBlock' }
);

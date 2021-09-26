import React from 'react';
import { makeStyles } from '@material-ui/styles';

export default function ProfileBlockData({ firstName, lastName, role }) {
  const classes = useStyles();

  return (
    <div className={classes.userDataContainer}>
      <div data-testid="name" className={classes.userName}>{`${firstName} ${lastName}`}</div>
      <div data-testid="role" className={classes.userRole}>
        {role}
      </div>
    </div>
  );
}

const useStyles = makeStyles(
  (theme) => ({
    ...theme,
    userDataContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    userName: {
      fontSize: theme.fonts.baseFontSize,
      paddingTop: '15px',
      width: '80%',
    },
    userRole: {
      fontSize: theme.fonts.smallFontSize,
      color: theme.colors.sereneMidnight,
      paddingBottom: '15px',
    },
  }),
  { name: 'ProfileBlockData' }
);

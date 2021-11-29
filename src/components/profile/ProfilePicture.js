import { makeStyles } from '@material-ui/styles';
import React from 'react';

export default function ProfilePicture({ profilePicture }) {
  const classes = useStyles();

  return (
    <div className={classes.pictureContainer}>
      <img data-testid="picture" className={classes.picture} src={profilePicture} />
    </div>
  );
}

const useStyles = makeStyles(
  (theme) => ({
    pictureContainer: {
      padding: '.5rem 0'
    },
    picture: {
      maxWidth: '100%',
      maxHeight: '100%',
      width: '55%',
      backgroundColor: '#fff',
      borderRadius: '50%',
    },
  }),
  'ProfilePicture'
);

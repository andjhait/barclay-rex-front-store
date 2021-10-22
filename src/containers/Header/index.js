import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Menu from '../../components/Menu';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: theme.palette.background.black,
  },
  mainWrapper: {
    textAlign: 'center',
    height: '55px',
    width: '100%',
    zIndex: '9999'
  }
}))
export default function Header({ navBar, headerLogo }) {
  const classes = useStyles();
    return (
      <div className={classes.mainContainer}>
      <Container className={classes.mainWrapper} maxWidth="xl">
        <Menu navBar={navBar} headerLogo={headerLogo} />
      </Container>
      </div>
    );
  }
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavItems from '../NavItems';
import MobileTopHead from '../MobileTopHead';
import { getStrapiMedia } from '../../../utils/medias';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    display: 'flex',
    textAlign: 'center'
  },
  logoContainer: {
    flex: 'auto',
    display: 'inline-block',
    zIndex: '99',
    '& img': {
      padding: '0 3px',
      maxWidth: '80px',
      maxHeight: '100%',
    }
  },
  menuIcon: {
    float: 'right',
    border: '1px solid transparent',
    borderRadius: '.375rem',
    width: '22px',
    padding: '0',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    marginLeft: '10px',
    height: '50px',
    '&::before, &::after, & span': {
      margin: '5px -2px',
      display: 'block',
      transition: 'all .2s ease-in-out',
      content: '""',
      height: '2px',
      backgroundColor: theme.palette.primary.main
    },
    '& span': {
      width: '12px!important'
    }
  },
  mobileNav: {
    position: 'fixed',
    right: '0',
    width: '40%',
    background: theme.palette.menuBg,
    padding: '30px',
    height: '100%',
    zIndex: '99',
    marginTop: '0',
    overflow: 'hidden',
    zIndex: '999',
    top: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '& .mainMenuWrapper': {
        display: 'block!important'
      }
    },
    '& li ': {
      display: 'block!important',
      marginTop: '20px',
      borderBottom: '1px solid white',
      lineHeight: '35px',
      '& a': {
        fontSize: '18px',
        fontWeight: '500'
      }
    },
  },
  aj: {
    display: 'block'
  },
  bj: {
    display: 'flex'
  }
}));

const Menu = ({ navBar, headerLogo }) => {
  const router = useRouter()
  const [mobileNav, setMobileNav] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setMobileNav(!mobileNav);
  }
  const handleClickAway = () => {
    setMobileNav(false);
  };
  const closeMenu = () => {
    setMobileNav(false);
  }

  useEffect(() => {
    if (router.asPath === '/') setCheckout(false)
    else setCheckout(true);
  }, [router.query]);

  const displayPrt = checkout ? 'block' : 'flex';

  return (
    <nav className={classes.mainWrapper} style={{ display: displayPrt }}>
      <div className={classes.logoContainer}>
      <Link href='/' passHref>
        <a>
          <img src={getStrapiMedia(headerLogo?.url)} alt="Barclay Rex" />
        </a>
      </Link>
      </div>
      <button onClick={handleClick} className={classes.menuIcon}>
        <span>&nbsp;</span>
      </button>
      {mobileNav && (
        <ClickAwayListener onClickAway={handleClickAway}>
         <div className={classes.mobileNav}>
         <MobileTopHead closeMenu={closeMenu} />
         <NavItems navBar={navBar} closeMenu={closeMenu} />
       </div>
       </ClickAwayListener>
      )}
    </nav>
  )
}

export default Menu;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: theme.palette.background.black
  },
  paperWrapper: {
    paddingTop: '.7rem',
    paddingBottom: '.7rem',
    color: theme.palette.primary.main,
    display: 'flex',
    width: '100%',
    right: '0',
    left: '0',
    zIndex: '99',
    bottom: '0',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      textAlign: 'center'
    }
  },
  upperPart: {
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',

    },
    '& a': {
      color: 'inherit',
      marginRight: '20px',
      '&:last-child': {
        marginRight: 0
      },
      '& svg': {
        height: '0.8em',
        width: '0.8em',
        verticalAlign: 'middle'
      }
    }
  },
  line: {
    opacity: '0.24',
    border: 'none',
    borderTop: '1px solid #7B8591'
  },
  copyright: {
    fontSize: '12px',
    textAlign: 'right',
    display: 'flex',
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      textAlign: 'center'
    },
    '& p': {
      padding: 0,
      margin: 0,
      marginRight: '20px',
      '&:last-child': {
        marginRight: 0
      }
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      display: 'inline-block'
    },
  },
  mainLink: {
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      display: 'inline-block',
      color: theme.palette.white
    }
  }

}));

const Footer = ({ smallText, social, footerSection }) => {
  const classes = useStyles();
  let facebookLink = '';
  let twitterLink = '';
  let instaLink = '';
  social.map(function (item, index) {
    if (item.socialTitle === "Facebook") return facebookLink = item.link;
    else if (item.socialTitle === "Instagram") return instaLink = item.link;
    else if (item.socialTitle === "Twitter") return twitterLink = item.link;
  })
  return (
    <div className={classes.mainContainer}>
    <Container maxWidth="xl">
      <section className={classes.paperWrapper}>
        <div className={classes.upperPart}>
          <Link href={facebookLink}>
            <a target="_blank">
              <FacebookIcon />
            </a>
          </Link>
          <Link href={instaLink}>
            <a target="_blank">
              <InstagramIcon />
            </a>
          </Link>
          <Link href={twitterLink}>
            <a target="_blank">
              <TwitterIcon />
            </a>
          </Link>
        </div>
        <div className={classes.copyright}>
          <p><Link href='/'>{smallText[0]?.copyrightText}</Link></p>
          <p><Link href='/'>{smallText[1]?.copyrightText}</Link></p>
          {footerSection.map(function (item, index) {
            return (
              <p key={item.text} className={classes.mainLink}><Link href={item.url}>{item.text}</Link></p>    
            )
          })}
          <p className={classes.mainLink}><Link href='terms-and-conditions'>TERMS & CONDITIONS</Link></p>    
        </div>
      </section>
    </Container>
    </div>
  )
}

export default Footer;
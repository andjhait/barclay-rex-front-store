import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: '280px',
    overflow: 'hidden',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      height: '150px'
    }
  },
  textBlock: {
    margin: 'auto',
    textAlign: 'left',
  },
  title: {
    fontSize: '22px',
    color: theme.palette.primary.main,
    margin: '0',
    padding: '0'
  },
  newtitle: {
    fontSize: '22px',
    color: theme.palette.font,
    margin: '0',
    padding: '0',
    textAlign: 'center',
    maxWidth: '40%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    }
  },
  subtitle: {
    color: theme.palette.font,
    margin: '0',
    padding: 0,
    '& a': {
      color: theme.palette.font,
      textDecoration: 'none'
    }
  }
}))

const Hero = (props) => {
  const classes = useStyles();
  const content = props.content;
  return (
    <div className={classes.hero} style={{ backgroundImage: `url(${content?.picture?.url})` }}>
      <Container maxWidth="xl" className={classes.textBlock}>
        <h1 className={props.mainBlock ? classes.title : classes.newtitle }>{content?.title}</h1>
        {props.mainBlock ? <h5 className={classes.subtitle}><Link href="/" passHref><a>Home</a></Link>/ {props.page}</h5> : '' }
      </Container>
    </div>
  )
}

export default Hero;


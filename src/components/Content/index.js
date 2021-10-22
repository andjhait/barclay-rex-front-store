import { useRouter } from 'next/router'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CustomBtn from '../Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    marginTop: theme.margintopMain,
    // margin: '-40px',
    '& p': {
      marginTop: theme.marginSection
    },
    [theme.breakpoints.down('sm')]: {
      // margin: 'auto'
    }
  },
  description: {
    marginBottom: theme.marginSection,
    '& p:last-child':{
      marginTop: theme.margintop
    },
    '& p:first-child':{
      marginTop: theme.marginSection
    }
  },
  textContainer: {
    color: theme.palette.font
  },
  title: {
    color: theme.palette.primary.main,
    maxWidth: '40%',
    margin: '0',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  line: {
    borderBottom: '1pt solid #fff',
    maxWidth: '25%',
    textAlign: 'left',
    margin: 0,
    marginTop: '2em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  mainImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    maxWidth: '400px'
  },
  mobileFirst: {
    [theme.breakpoints.down('sm')]: {
      order: 1
    }
  },
  mobileSecond: {
    [theme.breakpoints.down('sm')]: {
      order: 2
    }
  }
}))

const Content = (props) => {
  const router = useRouter()
  const classes = useStyles();
  const content = props.content;
  const imgBlock = content.testDirection;
  const firstImg = classes.mobileFirst;
  const secondImg = classes.mobileSecond; 
  const handleClick = (url) => {
    router.push(url);
  }
  const textBlock = () => {
    return (
      <div className={classes.textContainer}>
        <h2 className={classes.title}>{content.title}</h2>
        <h3>{content.subtitle}</h3>
        <p className={classes.line} />
        <div className={classes.description} dangerouslySetInnerHTML={{ __html: content.description }} />
        {content?.Button[0]?.text && !props?.noButton ? <CustomBtn onClick={(e) => handleClick(content?.Button[0]?.url)} link={content?.Button[0]?.url} text={content?.Button[0]?.text} /> : '' }
    </div>
    )
  }
  
  return (
<Container maxWidth="xl">
  <Grid container className={classes.mainWrapper} spacing={3}>
    <Grid className={imgBlock === 'right' ? firstImg : secondImg} item md={imgBlock === 'right' ? 5 : 7}>
      { imgBlock === 'right' ? <img className={classes.mainImg} src={content?.image?.url} alt={content.title} /> : textBlock() }
    </Grid>
    <Grid className={imgBlock === 'right' ? secondImg : firstImg} item md={props.leftImg ? 7 : 5}>
    { imgBlock === 'right' ? textBlock() : <img className={classes.mainImg} src={content?.image?.url} alt={content.title} /> }
    </Grid>
  </Grid>
</Container>
  )
}

export default Content;
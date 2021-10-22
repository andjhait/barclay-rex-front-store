import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hero from '../../components/Hero';
import NewsItems from '../../components/NewsItems';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    backgroundColor: theme.palette.background.black
  },
  gridContainer: {
    marginTop: '2rem',
    paddingBottom: '3rem'
  },
  mainBlock: {
    backgroundColor: theme.palette.background.black,
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
    }
  },
  heroWrapper: {
    marginTop: theme.margintopMain
  }
}))
const News = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <Container maxWidth="xl">
        <div className={classes.mainBlock}>
          {props?.innerPage.map(function (parent) {
            return (
              parent?.innerPage?.map(function (item, index) {
                if (item.__component === 'sections.hero') return <Hero page='Events/Rex Club Grand Opening' content={item} mainBlock={index === 0} />
                else if (item.__component === 'sections.article') return (
                  <Grid container className={classes.gridContainer} spacing={3}>
                    <NewsItems content={item} />
                  </Grid>
                )
              })  
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default News;


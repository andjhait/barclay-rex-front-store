import { makeStyles } from '@material-ui/core/styles';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Instagram from '../../components/Instagram';

const useStyles = makeStyles((theme) => ({
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
const History = ({ innerPage }) => {
  const classes = useStyles();
  return (
    <div className={classes.mainBlock}>
      {innerPage.map(function(item, index) {
        if (item.__component === 'sections.hero') return <Hero page='History' content={item} mainBlock={index === 0} />
        else if (item.__component === 'sections.article') return <Content content={item} />
      })}
      <Instagram />
    </div>
  )
}

export default History;


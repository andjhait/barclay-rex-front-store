import { makeStyles } from '@material-ui/core/styles';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import data1 from './data1.json';
import data2 from './data2.json';
import data3 from './data3.json';
import about1 from './about1.json';
import about2 from './about2.json';


const useStyles = makeStyles((theme) => ({
  heroWrapper: {
    marginTop: theme.margintopMain
  }
}))
const About = () => {
  const classes = useStyles();
  return (
    <>
      <Hero content={about1.content} mainBlock />
      <Content  content={data1.content} />
      <Content leftImg content={data2.content} />
      <div className={classes.heroWrapper}>
        <Hero content={about2.content} />
      </div>
      <Content content={data3.content} />
    </>
  )
}

export default About;


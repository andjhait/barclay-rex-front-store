import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CustomBtn from '../Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  textContainer: {
    color: theme.palette.font
  }
}))

const NewsItems = (props) => {
  const classes = useStyles();
  const router = useRouter()
  const content = props.content;
  const handleClick = (url) => {
    router.push(`/news-and-events${url}`);
  }
  return (
    <Grid item md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={content.title}
            height="180"
            image={content?.image?.url}
            title={content.title}
          />
          <CardContent>
            <h2>{content.title}</h2>
            <div className={classes.description} dangerouslySetInnerHTML={{ __html: content.description }} />
          </CardContent>
        </CardActionArea>
        <CardActions>
        {content?.Button[0]?.text ? <CustomBtn customButton link={content?.Button[0]?.url} text={content?.Button[0]?.text} onClick={(e) => handleClick(content.Button[0]?.url)} /> : '' }
        </CardActions>
      </Card>
    </Grid>
  )
}

export default NewsItems;
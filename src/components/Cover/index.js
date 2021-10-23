import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CustomButton from '../../components/Button';
import Reservation from '../Reservation';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    color: theme.palette.font,
    '& h1': {
      fontSize: '38px',
      lineHeight: '42px',
      margin: 0,
      fontWeight: 'normal',
      color: theme.palette.primary.main,
    },
  },
  leftCover: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 98px)',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: '65vh'
    }
  },
  textContainer: {
    textAlign: 'center',
    maxWidth: '70%',
    margin: 'auto',
    marginTop: 'calc(50% - 190px)',
    [theme.breakpoints.down('xs')]: {
      marginTop: 'calc(50% - 50px)',
      maxWidth: '100%'
    }
  }
}));

const Cover = ({ innerPage }) => {
  const router = useRouter()
  const classes = useStyles();
  const handleClick = (url) => {
    router.push(url);
  }
  const isStoreEnavled = process.env.NEXT_PUBLIC_ENABLE_STORE && process.env.NEXT_PUBLIC_ENABLE_STORE === 'true'
  return (
    <>
      <section className={classes.mainWrapper}>
        <Grid container>
          {innerPage.map(function (item, index) {
            return (
              <Grid key={item.buttons[0]?.text} item md={6} className={classes.leftCover} style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item?.picture?.url})` }}>
                <Container maxWidth="xl">
                  <div className={classes.textContainer}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    {index === 0 && !isStoreEnavled && <Reservation />}
                    {index === 1 && isStoreEnavled ? <Reservation /> : null}
                    {index === 0 && !isStoreEnavled && item.buttons[0]?.text === 'SHOP THE STORE' ? ''
                    : item.buttons[0]?.text &&
                    <CustomButton url={item.buttons[0]?.url} text={item.buttons[0]?.text} onClick={(e) => handleClick(item.buttons[0]?.url)} />}
                  </div>
                </Container>
              </Grid>
            )
          })}
        </Grid>
      </section>
    </>
  )
}

export default Cover;
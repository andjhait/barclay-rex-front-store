import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  mainBtn: {
    position: 'relative',
    padding: '10px 70px',
    overflow: 'hidden',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.font}`,
    color: theme.palette.font,
    letterSpacing: '2.1px',
    borderRadius: 0,
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '1.1px',
      padding: '10px 30px',
    }
  },
  customButton: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: '1.5rem'
  }
}));

const CustomBtn = (props) => {
  const classes = useStyles();
  const { text, customButton } = props;
  const mainClass = customButton ? classes.customButton : '';
  return (
    <Button
      variant="contained"
      color="primary"
      className={`${classes.mainBtn} ${mainClass}`}
      onClick={props.onClick}
    >
      {text}
    </Button>
  )
}

export default CustomBtn;
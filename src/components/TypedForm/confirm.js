import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '10rem',
    display: 'flex',
    margin: 'auto',
    '& path': {
      fill: theme.palette.primary.main
    }
  }
}))

export default function ConfirmPage() {
  const classes = useStyles();
  return (
    <>
      <CheckIcon className={classes.icon} />
      <h1>Congratulations you've done it </h1>
    </>
  )
}

import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  breadcrumb: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    borderTop: `1px solid ${theme.palette.primary.main}`,
    marginBottom: '20px',
    padding: '10px 0px',
    '& a': {
      textDecoration: 'none',
      color: `${theme.palette.primary.main}!important`
    }
  }
}))

export default function Breadcrumb({ firstLink, firstText, secondText }) {
  const classes = useStyles();
  return (
    <Breadcrumbs className={classes.breadcrumb} aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>
      <Link color="inherit" href={firstLink}>
        {firstText}
      </Link>
      {secondText && <Typography color="textPrimary">{secondText}</Typography>}
    </Breadcrumbs>
  );
}
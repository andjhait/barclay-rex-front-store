import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	mainWrapper: {
		color: theme.palette.primary.main,
		cursor: 'pointer',
		marginTop: '20px',
		height: '1.3em',
		width: '1.3em',
		marginLeft: 'auto'
	}
}));

const Cancel = (props) => {
	const classes = useStyles();
	const closeMenu = () => {
		props.closeMenu();
	}
	return (
		<CancelIcon onClick={closeMenu} className={classes.mainWrapper} />
	)
}

export default Cancel;
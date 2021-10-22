import { makeStyles } from '@material-ui/core/styles';
import Cancel from '../Cancel'

const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        display: 'flex'
    }
}))

const MobileTopHead = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            <Cancel closeMenu={props.closeMenu} />
        </div>
    )
}

export default MobileTopHead;
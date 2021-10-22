import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    display: 'flex'
  },
  active: {
    color: theme.palette.primary.main + '!important',
    position: 'relative'
  },
  menuWrapper: {
    margin: 0,
    padding: 0,
    textAlign: 'left',
    paddingLeft: '20%',
    maxWidth: '255px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& li': {
      display: 'inline-block',
      paddingRight: 20,
      '& a': {
        textDecoration: 'none',
        color: theme.palette.font,
        fontWeight: 'normal',
      },
      '&:last-child': {
        paddingRight: 0,
        borderBottom: 'none'
      },
      '& svg': {
        verticalAlign: 'bottom'
      }
    }
  }
}));

const NavItems = ({ navBar, closeMenu }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
      <ul className={`${classes.menuWrapper} mainMenuWrapper`} edge="end">
        {navBar.map((menu, index) => {
          return (
            <li key={`${menu?.text}${index}`}>
              <Link href={menu?.url || ''} passHref>
                <a title={menu.text} onClick={closeMenu} className={`${router.asPath === menu?.url ? classes.active : ''}`}>
                  {menu.text}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
  )
}

export default NavItems;
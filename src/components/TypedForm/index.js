// import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import TypeForm from "./TypeForm.js";
import BasicTextFields from "./form";
import EmailField from "./form2";
import ContactField from "./form3";
import QuestionField from "./form4";
import Gallery from "../Gallery";
import Hero from '../Hero';
import Reservation from '../Reservation';
import fastFood from '../../assets/images/fast-food.svg'
import luggage from '../../assets/images/luggage.svg'
import security from '../../assets/images/security.svg'
import smarttv from '../../assets/images/smart-tv.svg'
import spoon from '../../assets/images/spoon-and-fork-crossed.svg'
import vip from '../../assets/images/vip.svg'
import wifi from '../../assets/images/wifi.svg'


const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    textAlign: 'left',
    minHeight: '84vh',
    color: 'white',
    '& p': {
      marginTop: '0',
      marginBottom: '10px',
      lineHeight: '16px',
      '&::first-child': {
        marginTop: '20px'
      }
    },
    '& div[style="transform:translateY(50vh) translateZ(0)"]': {
      transform: 'none!important'
    }
  },
  mainBtton: {
    position: 'relative',
    padding: '10px 20px',
    overflow: 'hidden',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.font}`,
    color: theme.palette.font,
    letterSpacing: '2.1px',
    borderRadius: 0,
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    maxWidth: '330px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '1.1px',
      padding: '10px 30px',
    }
  },
  mainbg: {
    backgroundColor: 'black'
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: '22px',
    lineHeight: '22px'
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: '500'
  },
  subtitlenew: {
    color: theme.palette.primary.main,
    fontSize: '18px',
    lineHeight: '16px',
    fontWeight: '600',
    marginTop: '1.5em'
  },
  imgContainer: {
    display: 'flex',
    marginTop: '20px',
    marginBottom: '20px',
    '& img': {
      width: 'auto',
      flex: '0.1',
      paddingRight: '20px',
      paddingLeft: '20px',
      borderRight: '1pt solid #fff',
      '&:last-child': {
        borderRight: 'none',
      },
      '&:first-child': {
        paddingLeft: '0'
      },
      [theme.breakpoints.down('xs')]: {
        paddingRight: '10px',
        paddingLeft: '10px',
      }
    }
  },
  formPart: {
    marginTop: "0em"
  },
  bulletList: {
    paddingLeft: "1em"
  },
  firstTitle: {
    textAlign: 'center',
    fontSize: '26px',
    marginBottom: '1%',
    marginTop: '10%'
  },
  center: {
    textAlign: 'center',
    marginBottom: '26px'
  }
}))

const TypedForm = ({ gallery }) => {

  const classes = useStyles();
  const content = {
    title: 'REX CLUB',
    picture: {
      url: 'https://barclayrex.s3.amazonaws.com/banner_cdb4e22817.jpg'
    }
  }
  return (
    <div className={classes.mainbg}>
      <Hero page='Rex Club' content={content} mainBlock />
      <Container maxWidth="xl" className={classes.mainWrapper} >
        <Grid container>
          <Grid item xs={12} md={6} className={classes.formPart}>
            <div className={classes.center}>
              <Reservation />
            </div>
            {/* <a
              download
              className={classes.mainBtton}
              target="_blank"
              href="https://barclayrex.s3.amazonaws.com/Rex_Club_Membership_info_cover_logo_6697a51575.pdf"
            >
              Download Club Application
            </a> */}
            {/* <button type="button" onClick={handleOpen}>REQUEST RESERVATION</button> */}
            <h2 className={`${classes.title} ${classes.firstTitle}`}>Club Application</h2>
            <div>
              <TypeForm>

                <BasicTextFields />
                <EmailField />
                <ContactField />
                <QuestionField />
              </TypeForm>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <h1 className={classes.title}>VIP CLUB AND LOUNGE</h1>
            <h2 className={classes.subtitle}>ANNUAL MEMBERSHIP, MONTHLY MEMBERSHIP & DAY PASSES AVAILABLE</h2>
            {/* <h2 className={classes.subtitle}>ANNUAL MEMBERSHIP, MONTHLY MEMBERSHIP & DAY PASSES AVAILABLE<br />CLUB HOURS MONDAY-FRIDAY 11AM-12AM SATURDAY 2PM-12AM AND SUNDAY 1-9PM</h2> */}
            <div className={classes.imgContainer}>
              <img src={fastFood} />
              <img src={luggage} />
              <img src={security} />
              <img src={smarttv} />
              <img src={spoon} />
              <img src={vip} />
              <img src={wifi} />
            </div>
            <h2 className={classes.subtitlenew}>Hours of Operation:</h2>
            <ul className={classes.bulletList}>
              <li>Monday-Saturday-11:00am-12:00am</li>
              <li>Sunday-1pm-9pm</li>
              <li>Hours may be changed at Management’s discretion</li>
            </ul>
            <h2 className={classes.subtitlenew}>Privileges:</h2>
            <ul className={classes.bulletList}>
              <li>Year-Round Key Card access to Rex Club</li>
              <li>Personalized and Humidified Locker with Key</li>
              <li>Maitre d’ Services</li>
              <li>10% off cigars, accessories, tobacco and beverages</li>
              <li>Website Price Matching on Boxes of Cigars when possible</li>
              <li>Hi-speed Wi-Fi access</li>
              <li>Smart TV’s with Netflix and local cable programming</li>
              <li>Two Guests per visit</li>
              <li>In-House dining options</li>
              <li>VIP Privileges- Early purchase of new and limited release cigars</li>
              <li>Priority and Reserved seating for each visit as well as Special Rex Club Events</li>
              <li>20% off personal, private events booked through Rex Club</li>
              <li>Day-Passes available</li>
            </ul>
            <h2 className={classes.subtitlenew}>Annual Membership Rates</h2>
            <ul className={classes.bulletList}>
              <li>Individual-$1800/annual membership rate</li>
              <li>Quarterly Dues-$450 (January 1st, April 1st, July 1st, October 1st)</li>
              <li>Corporate-$4,000/year (1 locker/3 key cards)-<b>No Dues Required</b></li>
            </ul>
            <h2 className={classes.subtitlenew}>Monthly Membership Rates</h2>
            <ul className={classes.bulletList}>
              <li>Individual-$175/monthly</li>
              <li>Quarterly Dues-$450 (January 1st, April 1st, July 1st, October 1st)</li>
              <li>Corporate-$333/monthly (1 locker/3 key cards)-<b>No Dues Required</b></li>
            </ul>
            <h2 className={classes.subtitlenew}>Dues</h2>
            <p><i>Quarterly Dues: A $450 charge for dues will automatically be billed to the credit card on file on
              the following dates: January 1st, April 1st, July 1st and October 1st. <b>All quarterly dues can be
                redeemed towards purchases of cigars, tobacco, accessories or beverage purchases.</b></i></p>
            <Gallery gallery={gallery} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TypedForm;
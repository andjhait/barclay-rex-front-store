import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 100,
    '& h1': {
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 40
    },
    '& h2': {
      fontWeight: 'bold',
      marginTop: 40,
      color: theme.palette.primary.main,
      marginBottom: 0
    },
    '& li': {
      marginTop: '1em'
    }
  }
}));

const Terms = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.mainContainer}>
    <h1>Terms, Conditions, and Privacy Policy</h1>
    <p>When using the Barclay Rex website, you agree to but are not limited to the following: </p>
    <h2>AGE VERIFICATION:</h2>
    <p>The purchaser and receiver of our products is of legal age. You must be at least 21 years of age to purchase or receive products from Barclay Rex. If necessary we reserve the right to ask for identification.</p>
    <h2>BILLING VALDIATION</h2>
    <p>All credit card billing address information you provide must match up in our address verification system (AVS) with that of the cardholder. If these do not match your order may be declined. </p>
    <h2>CREDIT VALIDATION</h2>
    <p>For the protection of card holders and ourselves, orders that appear fraudulent may be held for manual review. If necessary, a representative will call you to verify the order. If we are unable to reach you at the provided phone number or email address within a reasonable period of time, the order will be canceled. Manual review may delay the shipment and delivery of your order. We reserve the right to cancel any order before it is shipped. All fraudulent orders may be reported to the shipping addresses local authorities.</p>
    <h2>PRIVACY POLICY</h2>
    <ul>
      <li><b>Information Collected:</b> As part of the buying and selling process, we collect personal information such as your name, address and email address. In addition, we also automatically receive your computer's Internet protocol (IP) address in order to verify customer location, browser and operating system enabling us to better serve our customers.</li>
      <li><b>Consent:</b> When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent or provide you with an opportunity to say no.<br /><br />Removal of consent for personal information used for marketing purposes and for all other information can be requested by contacting us at <a href="mailto:barclayrex@gmail.com">barclayrex@gmail.com</a>.</li>
      <li><b>Disclosure:</b> We may disclose your personal information if we are required by law to do so or if you violate our Terms and Conditions.</li>

    </ul>
    <h2>RETURN POLICY</h2>
    <p>Pipe Tobacco can only be returned if damaged or defective upon delivery. Returns accepted up to 15 days of purchase for a full refund. Returns accepted up to 30 days for store credit. A receipt is required for all returns. </p>
    <h2>SHIPPING</h2>
    <p>A flat shipping rate of $15 will be applied to all orders shipped within the United States. We do not ship internationally.</p>
    
  </Container>
  )
}

export default Terms;
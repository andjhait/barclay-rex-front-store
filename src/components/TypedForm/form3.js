import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "1rem auto 1rem"
    }
  },
  inputForm: {
    "& > *": {
      color: 'white'
    },
    '& div': {
      '&:before':{
        borderBottom: '1px solid white'
      }
    }
  },
  number: {
    backgroundColor: theme.palette.primary.main,
    padding: '1px 9px',
    borderRadius: '50%',
    verticalAlign: 'middle'
  }
}));

export default function ContactField() {
  const classes = useStyles();
  const handleChange = (e) => {
    Cookies.set('phone-number', e.target.value);
  }

  return (
    <div className={classes.root}>
      <h2><span className={classes.number}>3</span> Please enter your phone number</h2>
      <motion.div
        className="col-md-6"
        initial={{ y: "50vh" }}
        animate={{ y: 0 }}
        transition={{ stiffness: 150 }}
      >
        <TextField
          className={classes.inputForm}
          id="contact"
          required={true}
          fullWidth
          label="Phone Number"
          onChange={(e) => handleChange(e)}
        />
      </motion.div>
    </div>
  );
}

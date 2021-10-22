import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { motion } from "framer-motion";
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

export default function EmailField() {
  const classes = useStyles();

  const handleChange = (e) => {
    Cookies.set('email-id', e.target.value);
  }

  return (
    <div className={classes.root}>
      <h2><span className={classes.number}>2</span> Please enter your email</h2>
      <motion.div
        className="col-md-6 offset-md-3"
        initial={{ y: "50vh" }}
        animate={{ y: 0 }}
        transition={{ stiffness: 150 }}
      >
        <TextField
          className={classes.inputForm}
          required={true}
          id="email-id"
          fullWidth
          label="Your Email"
          onChange={(e) => handleChange(e)}
        />
      </motion.div>
    </div>
  );
}

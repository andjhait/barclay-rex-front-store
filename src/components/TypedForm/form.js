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

export default function BasicTextFields() {
  const classes = useStyles();

  const handleChange = (e) => {
    Cookies.set('full-name', e.target.value);
  }

  return (
    <div className={classes.root}>
      <h2><span className={classes.number}>1</span> Please enter your name</h2>
      <motion.div
        className="col-md-12"
        initial={{ y: "50vh" }}
        animate={{ y: 0 }}
        transition={{ stiffness: 150 }}
      >
        <TextField
          className={classes.inputForm}
          required={true}
          id="full-name"
          fullWidth
          label="Your Name"
          onChange={(e) => handleChange(e)}
        />
      </motion.div>
    </div>
  );
}

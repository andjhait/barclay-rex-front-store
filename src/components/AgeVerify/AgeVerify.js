import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Cookies from 'js-cookie';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function AgeVerify() {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAgree = () => {
    if (Cookies.get('age-confirmed') === true) return;
    if (value === 'yes') {
      Cookies.set('age-confirmed', true);
      setOpen(false);
    } 
    else {
      window.location.href = "https://google.com";
    } 
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick
      >
        <DialogContent>
          <FormControl component="fieldset">
            <FormLabel component="legend"><h3>Please verify your age. Are you at least 21 years old?</h3></FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAgree} color="primary" autoFocus>
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
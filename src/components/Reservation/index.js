import { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'date-fns';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useForm } from 'react-hook-form';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 1, 3)
  },
  mainBtn: {
    position: 'relative',
    padding: '10px 55px',
    overflow: 'hidden',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.font}`,
    color: theme.palette.font,
    letterSpacing: '2.1px',
    borderRadius: 0,
    marginBottom: '15px',
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '1.1px',
      padding: '10px 18px',
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 0, 0),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  icon: {
    fontSize: '10rem',
    display: 'flex',
    margin: 'auto',
    '& path': {
      fill: theme.palette.primary.main
    }
  }
}));

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiDialogContent);

const Reservation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [confirmed, setconfirmed] = useState(false);
  // const open =  false;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const onSubmit = async (data) => {
    const formData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      partySize: data.partySize,
      date: selectedDate
    }
    const api = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        partySize: data.partySize,
        date: selectedDate
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };
    fetch(`${api}/reservations`, requestOptions)
      .then(response => {

        const { error } = res.json();
        if (error) {
          console.log(error);
          return;
        }


        setconfirmed(true)
      }
      )
  }
  const body = (
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        {confirmed ? (
          <>
            <CheckIcon className={classes.icon} />
            <h1>Your reservation is confirmed.</h1>
          </>
        ) : (
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  {...register('name')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                  type="tel"
                  {...register('phone')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                  {...register('email')}
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12} sm={6}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date picker dialog"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    fullWidth
                    onChange={handleDateChange}

                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                    fullWidth
                    KeyboardButtonProps={{
                      'aria-label': 'change time',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="partySize"
                  label="Party Size"
                  type="number"
                  id="partySize"
                  autoComplete="partySize"
                  {...register('partySize')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SUBMIT
            </Button>
          </form>
        )}
      </div>
    </Container>
  );


  return (
    <div>
      {!open ? (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleOpen}
          className={classes.mainBtn}
        >
          REQUEST RESERVATION
        </Button>

      ) : (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">REQUEST RESERVATION</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </MuiDialogTitle>
          <DialogContent dividers>
            {body}
          </DialogContent>
        </Dialog>
      )}

    </div>
  );
}
export default Reservation;
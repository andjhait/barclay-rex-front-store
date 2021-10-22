import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Confirm from "./confirm.js";
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => ({
  mainroot: {
    "& > *": {
      margin: "1rem auto 1rem",
      maxWidth: "80%",
      [theme.breakpoints.down('sm')]: {
        maxWidth: "100%",
      }
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: 'black',
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  mainBtn: {
    position: 'relative',
    padding: '10px 70px',
    overflow: 'hidden',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    border: `2px solid ${theme.palette.font}`,
    color: theme.palette.font,
    letterSpacing: '2.1px',
    borderRadius: 0,
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '1.1px',
      padding: '10px 30px',
    }
  },
}));

export default function TypeForm({ children }) {
  const classes = useStyles();
  children = [...children, <Confirm />];
  const [fields, setFields] = useState(0);
  const [confirmed, setconfirmed] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    nextField(e)
  }
  const nextField = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (fields < children.length) setFields((prev) => prev + 1);
    if (e.target.innerText === 'SUBMIT') {
      const formData = {
        fullName: Cookies.get('full-name'),
        email: Cookies.get('email-id'),
        phone: Cookies.get('phone-number'),
        message: Cookies.get('questions-comments')
      }
      const api = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };
    fetch(`${api}/applications`, requestOptions)
      .then(response => setconfirmed(true))  
    }
  };
  const prevField = () => {
    if (fields > 0) setFields((prev) => prev - 1);
  };

  return (
    <div className={classes.mainroot}>
      <form className={classes.box} onSubmit={(e) => onSubmit(e)}>
        {children[fields]}

        <ButtonGroup
          disableElevation
          size="small"
          variant="contained"
          color="primary"
        >
          {fields < children.length - 1 && fields > 0 && (
            <Button className={classes.mainBtn} onClick={prevField}>BACK</Button>
          )}
          {fields < children.length - 2 && (
            <Button className={classes.mainBtn} onClick={(e) => nextField(e)}>NEXT</Button>
          )}
          {fields === children.length - 2 && (
            <Button className={classes.mainBtn} onClick={(e) => nextField(e)}>SUBMIT</Button>
          )}
        </ButtonGroup>
      </form>
    </div>
  );
}

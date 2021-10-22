import React, { useState } from 'react';
import Link from "next/link";
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    '& a': {
      textDecoration: 'none',
      fontWeight: '500',
      margin: '50px 5px',
      '&:first-child': {
        paddingLeft: '0'
      }
    }
  },
  active: {
    backgroundColor: theme.palette.primary.main
  },
  chipclass: {
    marginBottom: '5px',
    '& span': {
      cursor: 'pointer'
    }
  }
}))

const CategoryButtons = ({ categories = [] }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.mainWrapper}>
      {categories.map((_category) => {
        return _category.products.length ? (
          <Link href={`/categories/${_category.slug}`} key={_category.id}>
          <a>
          <Chip
            label={_category.name}
            className={`${classes.chipclass} ${router.asPath === `/categories/${_category.slug}` ? classes.active : ''}`}
          />
          </a>
        </Link>
        ) : null })}
    </div>
  );
};

export default CategoryButtons;

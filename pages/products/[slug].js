import { useState, useEffect } from 'react';
import Head from "next/head";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { getProducts, getProduct } from "../../utils/api";
import { getStrapiMedia } from "../../utils/medias";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Breadcrumb from '../../src/components/Breadcrumb';
import data from '../../public/product.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
    minHeight: '100vh',
    paddingTop: '55px',
    marginTop: '8px',
    marginBottom: '50px',
    '& a': {
      color: '#000',
      textDecoration: 'none',
      width: '100%',
      display: 'inline-block',
      textDecoration: 'none'
    }
  },
  priceSection: {
    display: 'flex',
  },
  title: {
    margin: 'auto',
    textAlign: 'left',
    marginLeft: '0'
  },
  subtitle: {
    margin: '0',
    textAlign: 'left',
    marginLeft: '0'
  },
  price: {
    margin: 0
  },
  mainButton: {
    position: 'relative',
    padding: '10px 70px',
    overflow: 'hidden',
    textTransform: 'uppercase',
    backgroundColor: 'transparent',
    border: `2px solid #000`,
    color: '#000',
    letterSpacing: '2.1px',
    borderRadius: 0,
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      letterSpacing: '1.1px',
      padding: '10px 30px',
    }
  },
  productImg: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  checkbox: {
    padding: '5px'
  },
  formControl: {
    margin: theme.spacing(0.5, 0, 0, 0),
    minWidth: '50%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    }
  },
  stateError: {
    fontSize: '12px',
    color: theme.palette.primary.main,
    marginTop: '5px',
    marginBottom: '0'
  },
  sizes: {
    margin: theme.spacing(2, 0, 0, 0)
  }
}));

const ProductPage = ({ product }) => {
  const [size, setSize] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [state, setState] = useState('');
  const router = useRouter();
  const stateNames = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
    'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }


  useEffect(() => {
    setSize(product?.Custom_field[0]?.title)
    setSelectedValue(product?.Custom_field[0]?.options)
    setState('New York')
  }, []);


  const handleChange = (name, price, stateChange) => {
    let newName = name;
    let newPrice = price;
    if (stateChange) {
      const productList = product?.Custom_field[product?.Custom_field.length - 1];
      newName = productList.title
      newPrice = productList.options
    }
    setSize(newName);
    setSelectedValue(newPrice);
  }

  const classes = useStyles();

  const handleStateChange = (e, nextitm) => {
    setState(e.target.value);
    if (e.target.value !== 'New York') handleChange('', '', 'stateChange');
  };

  const getTheStates = () => {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="rex-select-label">Select State</InputLabel>
        <Select
          labelId="rex-select-label"
          id="rex-select"
          value={state}
          onChange={(e) => handleStateChange(e)}
          fullWidth
        >
          {stateNames.map(item => <MenuItem fullWidth key={item} value={item}>{item}</MenuItem> )}
        </Select>
      </FormControl>
    )
  }

  const showCheckbox = (nextitm) => {
    if (!nextitm) return;
    return nextitm.Custom_field?.map((item, index) => {
      return (
        <FormGroup row key={index}>
          <FormControlLabel
            control={
              <Radio
                disabled={state !== 'New York'}
                name='product-page'
                checked={size === item.title}
                value={item.title}
                onChange={() => handleChange(item.title, item.options)}
                className={classes.checkbox}
                color="primary"
              />
            }
            label={item.title}
          />
        </FormGroup>
      )
    })
  }

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Head>
        <title>{product.title} - Barclay Rex</title>
      </Head>
      <Breadcrumb firstLink='/categories' firstText='Categories' secondText={product.title} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img
            src={getStrapiMedia(product?.image?.formats?.thumbnail?.url)}
            className={classes.productImg}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <div>
            <h1 className={classes.title}>
              {product.title} - ${selectedValue}
            </h1>
            <p>{product.description}</p>
            {getTheStates()}
            {state !== 'New York' && <p className={classes.stateError}><i>Customers outside New York state must purchase 8oz.</i></p>}
            <div className={classes.sizes}>
              <h2 className={classes.subtitle}><b>Sizes:</b></h2>
              {showCheckbox(product)}
            </div>
            
            <Button
              className={`snipcart-add-item ${classes.mainButton}`}
              data-item-id={product.id}
              data-item-price={selectedValue}
              // data-item-url={`/products/${product.slug}`}
              // data-item-url='/product.json'
              data-item-url='/'
              data-item-description={product.description}
              data-item-image={getStrapiMedia(product?.image?.formats?.thumbnail?.url)}
              data-item-name={`${product.title} - ${size}`}
              v-bind="customFields"
            >Add to cart </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);
  return { props: { product } };
}

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      };
    }),
    fallback: true,
  };
}

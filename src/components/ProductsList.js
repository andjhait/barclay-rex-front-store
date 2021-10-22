import CategoryButtons from "./CategoryButtons";
import Link from "next/link";
import { getStrapiMedia } from "../../utils/medias";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Breadcrumb from './Breadcrumb';


const useStyles = makeStyles((theme) => ({
  mainroot: {
    backgroundColor: '#fff',
    minHeight: '100vh',
    paddingTop: '55px',
    marginTop: '8px',
  },
  root: {
    flexGrow: 1,
    paddingTop: '25px',
    marginBottom: '15px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '90vh'
    },
    '& a': {
      color: '#000',
      textDecoration: 'none',
      width: '100%',
      display: 'inline-block',
      textDecoration: 'none'
    }
  },
  media: {
    [theme.breakpoints.down('xs')]: {
      height: '100%'
    }
  },
  priceSection: {
    display: 'flex',
  },
  title: {
    margin: 'auto',
    width: '70%',
    textAlign: 'left',
    marginLeft: '0'
  },
  price: {
    margin: 0
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  productImg: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  gridWrapper: {
    marginBottom: '1rem'
  },
  cardContent: {
    minHeight: '70px'
  }
}));

const ProductsList = ({ categoryName, products, categories }) => {
  const classes = useStyles();
  return (
    <Container className={classes.mainroot} maxWidth="xl">
      <Breadcrumb firstLink='/categories' firstText='Categories' secondText={categoryName || 'All'} />
      <CategoryButtons categories={categories} />
      <Grid className={classes.root} container spacing={2}>
        {products?.map((_product) => (
          <Grid className={classes.gridWrapper} key={_product.slug} item xs={6} md={3}>
            <Card>
              <CardActionArea>
                <div
                  key={_product.id}
                >
                  <Link href={`/products/${_product.slug}`}>
                    <a>
                      <CardMedia
                        className={classes.media}
                        height="220"
                        component="img"
                        image={getStrapiMedia(_product?.image?.formats?.thumbnail?.url)}
                        title={_product.title}
                      />
                      <CardContent className={classes.cardContent}>
                        <div className={classes.priceSection}>
                          <h4 className={classes.title}>{_product.title}</h4>
                          <p className={classes.price}>${_product.price}</p>
                        </div>
                      </CardContent>
                    </a>
                  </Link>
                </div>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;

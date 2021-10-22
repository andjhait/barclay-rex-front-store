import Head from "next/head";
import { useRouter } from "next/router";
import Skeleton from '@material-ui/lab/Skeleton';
import ProductsList from "../../src/components/ProductsList";
import { getCategories, getCategory } from "../../utils/api";

const CategoryPage = ({ category, categories }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Skeleton variant="rect" width="60%" height={118} />;
  }

  return (
    <div>
      <Head>
        <title>{category.name} - Barclay Rex</title>
      </Head>
      <ProductsList categoryName={category.name} categories={categories} products={category.products} />
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const categories = await getCategories();
  const category = await getCategory(params.slug);
  return { props: { category, categories } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      };
    }),
    fallback: true,
  };
}

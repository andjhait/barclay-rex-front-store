import Head from "next/head";
import ProductsList from "../../src/components/ProductsList";
import { getProducts, getCategories } from "../../utils/api";

const HomePage = ({ products, categories }) => {
  return (
    <div>
      <Head>
        <title>Products - Barclay Rex</title>
      </Head>
      <ProductsList products={products} categories={categories} />
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return { props: { products, categories } };
}

export default HomePage;

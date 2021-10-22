import Head from "next/head";
import { otherPageData } from "../../utils/api";
import TypedForm from '../../src/components/TypedForm';

const RexClubPage = ({ gallery }) => {
  return (
    <div>
      <Head>
        <title>Rex Club - Barclay Rex</title>
      </Head>
      <TypedForm gallery={gallery} />
    </div>
  );
};

export async function getStaticProps() {
  const gallery = await otherPageData('/galleries');
  return { props: { gallery } };
}

export default RexClubPage;

import Head from "next/head";
import Terms from '../../src/containers/Terms';

const TermsPage = () => {
  return (
    <div>
      <Head>
        <title>REX - Terms and Conditions</title>
      </Head>
      <Terms />
    </div>
  );
};
export default TermsPage;

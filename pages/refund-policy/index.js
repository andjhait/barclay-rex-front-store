import Head from "next/head";
import { Refund } from '../../src/containers/Refund';


const RefundPage = () => {
  return (
    <div>
      <Head>
        <title>Refund Policy</title>
      </Head>
      <Refund />
    </div>
  );
};

export default RefundPage;

import * as React from 'react';
import App from "next/app";
import Head from "next/head";
import NProgress from 'nprogress';
import Layout from "../src/components/Layout";
import { getCategories } from "../utils/api";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import Router, { useRouter } from 'next/router'
import Cookies from 'js-cookie';
import { getGlobalData } from "../utils/api"
import theme from '../src/theme';
import { AgeVerify } from '../src/components/AgeVerify';

export const cache = createCache({ key: 'css', prepend: true });

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps, global }) => {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Layout global={global} categories={pageProps.categories}>
        <Head>
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
          <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
          <script async src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"></script>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />

        </Head>
        <CssBaseline />
        {Cookies.get('age-confirmed') ? '' : <AgeVerify />}
        <Component {...pageProps} />
      </Layout>

    </ThemeProvider>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  const globalLocale = await getGlobalData()
  // Fetch global site settings from Strapi
  const categories = await getCategories();
  // Pass the data to our page via props
  return { ...appProps, global: globalLocale, pageProps: { categories, path: ctx.pathname } };
};

export default MyApp;

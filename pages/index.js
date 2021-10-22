import Head from "next/head";
import Cover from '../src/components/Cover';
import { getPageData } from "../utils/api"
import Seo from '../src/components/Seo'

const HomePage = ({ pageData }) => {
  return (
    <div>
      <Seo metadata={pageData.meta} />
      <Cover innerPage={pageData?.innerPage} />
    </div>
  );
};

export async function getStaticProps(context) {
  // const { params, locale, locales, defaultLocale, preview = null } = context


  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData('/pages')

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  // We have the required page data, pass it to the page component
  // const { contentSections, metadata, localizations } = pageData
  // const { contentSections, metadata, localizations } = newsData
  return {
    props: {
      pageData: pageData
      // sections: contentSections,
      // metadata,
      // pageContext: {
        // slug: pageData.slug,
        // locale: pageData.locale,
        // locales,
        // defaultLocale,
        // localizations,
      // },
    },
  }
}

export default HomePage;

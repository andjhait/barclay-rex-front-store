import { otherPageData } from "../../utils/api"
import News from '../../src/containers/News';
import Seo from '../../src/components/Seo'

const NewsEventsPage = ({ pageData }) => {
  return (
    <div>
      <Seo metadata={pageData[0].meta} />
      <News innerPage={pageData} />
    </div>
  );
};

export async function getStaticProps(context) {
  // const { params, locale, locales, defaultLocale, preview = null } = context


  // Fetch pages. Include drafts if preview mode is on
  const pageData = await otherPageData('/news-items')

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

export default NewsEventsPage;
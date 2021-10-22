import CategoryButtons from "./CategoryButtons";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

const Layout = ({ children, categories, global }) => {
  const { navBar, smallText, social, headerLogo, footerSection } = global;
  return (
    <>
      <Header navBar={navBar} headerLogo={headerLogo} />
      <div className="flex-grow">{children}</div>
      <Footer smallText={smallText} social={social} footerSection={footerSection} />
      <div
        hidden
        id="snipcart"
        data-api-key="OTNiN2QzZDMtZmQ1NC00YzRmLWE4NWYtMDgxYjAzNmFlYmFjNjM3NDI4MTc5ODk1OTA0NDI1"
      />
    </>
  );
};

export default Layout;

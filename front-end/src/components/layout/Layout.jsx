import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Main } from "/@/styles/layout.style";

export default function Layout({ children }) {
  const location = useLocation();
  const HIDDEN_HEADER_FOOTER_SIDE = ["/"];
  const isHiddenHeaderFooterSide = HIDDEN_HEADER_FOOTER_SIDE.includes(
    location.pathname
  );

  return (
    <>
      {!isHiddenHeaderFooterSide && <Header />}
      <Main>{children}</Main>
      {!isHiddenHeaderFooterSide && <Footer />}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

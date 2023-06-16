import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import { Contents } from "/@/styles/layout.style";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

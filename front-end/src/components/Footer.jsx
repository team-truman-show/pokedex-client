import { FooterContainer, Logo, SocialLinks } from "../styles/footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Logo to="/">
          <svg width="30" height="24">
            <use xlinkHref="#bootstrap" />
          </svg>
        </Logo>
        <span>&copy; {new Date().getFullYear()} Company, Inc</span>
      </div>
      <SocialLinks>
        <li>
          <a href="#">
            <svg width="24" height="24">
              <use xlinkHref="#twitter" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="24" height="24">
              <use xlinkHref="#instagram" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <svg width="24" height="24">
              <use xlinkHref="#facebook" />
            </svg>
          </a>
        </li>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;

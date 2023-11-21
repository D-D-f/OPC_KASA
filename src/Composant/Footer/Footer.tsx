import "./Footer.scss";
import Logo from "../Logo/Logo";
import LogoFooter from "../../assets/logo_footer.svg";

const Footer = () => {
  const styleLogo = {
    width: "200px",
    height: "40px",
  };

  return (
    <footer>
      <Logo style={{ ...styleLogo }} path={LogoFooter} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

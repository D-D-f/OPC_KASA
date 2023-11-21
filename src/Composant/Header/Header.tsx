import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import LogoHeader from "../../assets/LOGO.svg";
import "./Header.scss";

const Header = () => {
  const styleLogo = {
    width: "210px",
    height: "70px",
  };

  return (
    <header>
      <Logo style={{ ...styleLogo }} path={LogoHeader} />
      <Navigation />
    </header>
  );
};

export default Header;

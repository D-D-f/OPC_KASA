import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import LogoHeader from "../../assets/LOGO.svg";
import "./Header.scss";

const Header = () => {
  const styleLogo = {
    width: "210px",
    height: "70px",
  };

  return (
    <header>
      <NavLink to="/">
        <Logo style={{ ...styleLogo }} path={LogoHeader} />
        <Navigation />
      </NavLink>
    </header>
  );
};

export default Header;

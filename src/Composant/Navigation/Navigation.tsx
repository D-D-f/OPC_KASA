import "./Navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="ul_navigation">
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about">À Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

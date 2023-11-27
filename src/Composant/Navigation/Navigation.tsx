import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="ul_navigation">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

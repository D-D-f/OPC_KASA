import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>
        <NavLink to="/">Retouner sur la page d'accueil</NavLink>{" "}
      </p>
    </div>
  );
};

export default ErrorPage;

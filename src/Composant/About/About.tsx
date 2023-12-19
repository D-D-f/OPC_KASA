import Banner from "../Banner/Banner";
import Collapse from "../Collapse/Collapse";
import path from "../../assets/banner2.png";
import "./About.scss";

const About = () => {
  const title = [
    {
      title: "Fiabilité",
      id: 1,
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      id: 2,
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      id: 3,
      description:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      id: 4,
      description:
        "La Sécurité est la priorité de Kasa. Aussi pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  const displayCollapse = title.map((title) => {
    return (
      <div key={title.id} className="about">
        <Collapse text={title.title}>
          <p>{title.description}</p>
        </Collapse>
      </div>
    );
  });

  return (
    <>
      <Banner text="" path={path} />
      {displayCollapse}
    </>
  );
};

export default About;

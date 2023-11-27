import Banner from "../Banner/Banner";
import Collapse from "../Collapse/Collapse";
import path from "../../assets/banner2.png";
import { useLocation } from "react-router-dom";
import "./About.scss";

const About = () => {
  const location = useLocation();
  console.log(location);
  const title = ["Fiabilité", "Respect", "Service", "Sécurité"];
  const displayCollapse = title.map((title, id) => {
    return (
      <div key={id} className="about">
        <Collapse text={title} description="" />
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

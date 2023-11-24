import Banner from "../Banner/Banner";
import Collapse from "../Collapse/Collapse";
import path from "../../assets/banner2.png";
import "./About.scss";

const About = () => {
  const title = ["Fiabilité", "Respect", "Service", "Sécurité"];
  const displayCollapse = title.map((title) => {
    return (
      <div className="about">
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

import "./Collapse.scss";
import arrow from "../../assets/arrowTop.png";

interface CollapseProps {
  text: string;
  description: string;
}

const Collapse = ({ text, description }: CollapseProps) => {
  return (
    <div className="containerCollapse">
      <div className="collapse">
        <p>{text}</p>
        <span>
          <img src={arrow} alt="arrow" />
        </span>
      </div>
      <div className="descri">
        <p className="descriptionP">{description}</p>
      </div>
    </div>
  );
};

export default Collapse;

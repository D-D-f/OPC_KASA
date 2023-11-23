import "./Collapse.scss";
import { useState } from "react";
import arrow from "../../assets/arrowTop.png";

interface CollapseProps {
  text: string;
  description: string;
}

const Collapse = ({ text, description }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`containerCollapse ${isOpen ? "open" : ""}`}>
      <div className="collapse" onClick={toggleCollapse}>
        <p>{text}</p>
        <span>
          <img className={isOpen ? "arrowOpen" : ""} src={arrow} alt="arrow" />
        </span>
      </div>
      <div className={`descri ${isOpen ? "open" : ""}`}>
        <ul>
          <li>{description}</li>
        </ul>
      </div>
    </div>
  );
};

export default Collapse;

import "./Collapse.scss";
import { ReactNode, useState } from "react";
import arrow from "../../assets/arrowTop.png";

interface CollapseProps {
  text: string;
  children: ReactNode;
}

const Collapse = ({ text, children }: CollapseProps) => {
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
        <ul className="ul_li">{children}</ul>
      </div>
    </div>
  );
};

export default Collapse;

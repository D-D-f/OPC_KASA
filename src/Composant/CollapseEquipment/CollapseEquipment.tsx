import "../Collapse/Collapse.scss";
import { useState } from "react";
import arrow from "../../assets/arrowTop.png";

interface CollapseEquipmentProps {
  text: string;
  equipment: [];
}

const CollapseEquipment = ({ text, equipment }: CollapseEquipmentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const displayEquipment = equipment.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));
  return (
    <div className={`containerCollapse ${isOpen ? "open" : ""}`}>
      <div className="collapse" onClick={toggleCollapse}>
        <p>{text}</p>
        <span>
          <img className={isOpen ? "arrowOpen" : ""} src={arrow} alt="arrow" />
        </span>
      </div>
      <div className={`descri ${isOpen ? "open" : ""}`}>
        <ul>{displayEquipment}</ul>
      </div>
    </div>
  );
};

export default CollapseEquipment;

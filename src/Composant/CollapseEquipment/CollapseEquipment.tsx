import "../Collapse/Collapse.scss";
import arrow from "../../assets/arrowTop.png";

interface CollapseEquipmentProps {
  text: string;
  equipment: [];
}

const CollapseEquipment = ({ text, equipment }: CollapseEquipmentProps) => {
  const displayEquipment = equipment.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));
  return (
    <div className="containerCollapse">
      <div className="collapse">
        <p>{text}</p>
        <span>
          <img src={arrow} alt="arrow" />
        </span>
      </div>
      <div className="descri">
        <ul>{displayEquipment}</ul>
      </div>
    </div>
  );
};

export default CollapseEquipment;

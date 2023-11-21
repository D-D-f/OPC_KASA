import "./Card.scss";

interface CardProps {
  name: string;
}

const Card = ({ name }: CardProps) => {
  return (
    <div className="card">
      <h3>{name}</h3>
    </div>
  );
};

export default Card;

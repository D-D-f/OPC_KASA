import "./Card.scss";

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  );
};

export default Card;

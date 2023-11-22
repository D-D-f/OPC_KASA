import "./Card.scss";

interface CardProps {
  title: string;
  cover: string;
}

const Card = ({ title, cover }: CardProps) => {
  const styleCard = {
    backgroundImage: `url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={{ ...styleCard }} className="card">
      <h3>{title}</h3>
    </div>
  );
};

export default Card;

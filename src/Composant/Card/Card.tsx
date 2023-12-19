import "./Card.scss";

interface CardProps {
  title: string;
  cover: string;
}

const Card = ({ title, cover }: CardProps) => {
  const styleCard: React.CSSProperties = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
  };

  return (
    <div style={{ ...styleCard }} className="card">
      <h3>{title}</h3>
    </div>
  );
};

export default Card;

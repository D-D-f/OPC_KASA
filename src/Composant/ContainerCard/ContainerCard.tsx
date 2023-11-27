import "./ContainerCard.scss";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

interface ContainerCardProps {
  data: { title: string; id: string; cover: string }[];
}

const ContainerCard = ({ data }: ContainerCardProps) => {
  const displayCard = data?.map((card) => {
    return (
      <Link key={card.id} to={`/${card.id}`}>
        <Card key={card.id} title={card.title} cover={card.cover} />
      </Link>
    );
  });

  return <section className="container_card">{displayCard}</section>;
};

export default ContainerCard;

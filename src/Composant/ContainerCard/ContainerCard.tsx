import "./ContainerCard.scss";
import Card from "../Card/Card";

interface ContainerCardProps {
  data: { title: string; id: string; cover: string }[];
}

const ContainerCard = ({ data }: ContainerCardProps) => {
  const displayCard = data?.map((card) => {
    return <Card key={card.id} title={card.title} cover={card.cover} />;
  });

  return <section className="container_card">{displayCard}</section>;
};

export default ContainerCard;

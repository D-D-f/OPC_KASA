import { useId } from "react";
import "./Star.scss";

interface StarProps {
  rating: string;
}

const Star = ({ rating }: StarProps) => {
  const id = useId();

  const numberStar: number = Number(rating);
  const allStars = new Array(5).fill(0).map((_, index) => {
    const starType = index < numberStar ? "active" : "inactive";
    return {
      key: `${id}-${starType}-${index}`,
      src: `./src/assets/star-${starType}.png`,
    };
  });

  const displayStar = allStars.map((star) => (
    <img key={star.key} src={star.src} alt="star" />
  ));

  return <div className="allStar">{displayStar}</div>;
};

export default Star;

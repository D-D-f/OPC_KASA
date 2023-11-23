interface StarProps {
  rating: string;
}

const Star = ({ rating }: StarProps) => {
  const numberStar: number = Number(rating);
  console.log(numberStar);

  return <div></div>;
};

export default Star;

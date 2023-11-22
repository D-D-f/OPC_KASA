import { useState } from "react";

interface CarouselProps {
  pictures: string[];
}

const Carousel = ({ pictures }: CarouselProps) => {
  const [indexPicture, setIndexPicture] = useState(0);

  const changeImage = (position: string, id: number) => {
    if (position === "left") {
      id === 0 ? setIndexPicture(4) : setIndexPicture((curr) => curr - 1);
    } else if (position === "right") {
      id === pictures.length - 1
        ? setIndexPicture(0)
        : setIndexPicture((curr) => curr + 1);
    }
  };

  const styleCarousel = {
    backgroundImage: `url(${pictures[indexPicture]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "415px",
  };

  return (
    <div style={{ ...styleCarousel }} className="carousel">
      <img
        onClick={() => changeImage("left", indexPicture)}
        src="./src/assets/left.png"
        alt="arrow previous"
      />
      <img
        onClick={() => changeImage("right", indexPicture)}
        src="./src/assets/right.png"
        alt="arrow next"
      />
    </div>
  );
};

export default Carousel;

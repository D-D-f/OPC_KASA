import { useState } from "react";
import "./Carousel.scss";

interface CarouselProps {
  pictures: string[];
}

const Carousel = ({ pictures }: CarouselProps) => {
  const [indexPicture, setIndexPicture] = useState(0);

  const changeImage = (position: string, id: number) => {
    if (position === "left") {
      id === 0
        ? setIndexPicture(pictures.length - 1)
        : setIndexPicture((curr) => curr - 1);
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
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "415px",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div style={{ ...styleCarousel }} className="carousel">
      {pictures.length > 1 && (
        <>
          <img
            onClick={() => changeImage("left", indexPicture)}
            src="./src/assets/left.png"
            alt="arrow previous"
            className="arrow"
          />
          <span className="numberPicture">{`${indexPicture + 1}/${
            pictures.length
          }`}</span>
          <img
            onClick={() => changeImage("right", indexPicture)}
            src="./src/assets/right.png"
            alt="arrow next"
            className="arrow"
          />
        </>
      )}
    </div>
  );
};

export default Carousel;

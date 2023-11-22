import Carousel from "../Carousel/Carousel";
import { useParams } from "react-router-dom";

interface Picture {
  id: string;
  pictures: string[];
}

interface PageLocationProps {
  data: Picture[];
}
const PageLocation = ({ data }: PageLocationProps) => {
  const { id } = useParams();
  const pictures = data
    .filter((picture) => picture.id === id)
    .flatMap((picture) => picture.pictures);

  return (
    <div>
      <Carousel pictures={pictures} />
    </div>
  );
};

export default PageLocation;

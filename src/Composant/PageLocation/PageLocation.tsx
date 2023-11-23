import Carousel from "../Carousel/Carousel";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";
import NameProfil from "../NameProfil/NameProfil";
import Star from "../Star/Star";
import Tag from "../Tag/Tag";
import "./PageLocation.scss";

interface location {
  id: string;
  locations: string[];
  pictures: [];
  title: string;
  location: string;
  host: { name: string; picture: string };
  tags: [];
  rating: string;
}

interface PageLocationProps {
  data: location[];
}
const PageLocation = ({ data }: PageLocationProps) => {
  const { id } = useParams();
  const locations = data
    .filter((location) => location.id === id)
    .flatMap((location) => {
      return (
        <div key={location.id}>
          <section>
            <Carousel pictures={location.pictures} />
          </section>
          <section className="nameProfil">
            <div>
              <Title text={location.title} />
              <h4>{location.location}</h4>
            </div>
            <NameProfil name={location.host.name} img={location.host.picture} />
          </section>
          <section>
            <div>
              <Tag tags={location.tags} />
            </div>
            <div>
              <Star rating={location.rating} />
            </div>
          </section>
        </div>
      );
    });
  console.log(data);
  return <div>{locations}</div>;
};

export default PageLocation;

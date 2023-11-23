import Carousel from "../Carousel/Carousel";
import { useParams } from "react-router-dom";
import Title from "../Title/Title";
import NameProfil from "../NameProfil/NameProfil";

interface location {
  id: string;
  locations: string[];
  pictures: [];
  title: string;
  location: string;
  host: { name: string; picture: string };
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
          <section>
            <div>
              <Title text={location.title} />
              <h4>{location.location}</h4>
            </div>
            <NameProfil name={location.host.name} img={location.host.picture} />
          </section>
        </div>
      );
    });
  console.log(data);
  return <div>{locations}</div>;
};

export default PageLocation;

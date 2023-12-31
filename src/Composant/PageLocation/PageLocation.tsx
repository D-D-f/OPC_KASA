import Carousel from "../Carousel/Carousel";
import { useParams, useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import NameProfil from "../NameProfil/NameProfil";
import Star from "../Star/Star";
import Tag from "../Tag/Tag";
import Collapse from "../Collapse/Collapse";
import "./PageLocation.scss";
import { useEffect } from "react";

interface location {
  id: string;
  locations: string[];
  pictures: [];
  title: string;
  location: string;
  host: { name: string; picture: string };
  tags: [];
  rating: string;
  description: string;
  equipments: [];
}

interface PageLocationProps {
  data: location[];
}
const PageLocation = ({ data }: PageLocationProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkId = data.filter((location) => location.id === id);
    if (checkId.length === 0) {
      navigate("/error");
    }
  }, [id, data, navigate]);

  const locations = data
    .filter((location) => location.id === id)
    .flatMap((location) => {
      return (
        <div key={location.id}>
          <section>
            <Carousel pictures={location.pictures} />
          </section>
          <div className="profilLoc">
            <div>
              <Title text={location.title} />
              <h4 className="lieux">{location.location}</h4>
              <Tag tags={location.tags} />
            </div>

            <div className="nameProf">
              <NameProfil
                name={location.host.name}
                img={location.host.picture}
              />
              <Star rating={location.rating} />
            </div>
          </div>

          <section className="description_equipement">
            <Collapse text="Description">
              <p>{location.description}</p>
            </Collapse>
            <Collapse text="Équipements">
              {location.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </Collapse>
          </section>
        </div>
      );
    });
  return <div>{locations}</div>;
};

export default PageLocation;

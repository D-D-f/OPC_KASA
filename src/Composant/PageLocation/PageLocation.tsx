import Carousel from "../Carousel/Carousel";
import { useParams, useNavigate } from "react-router-dom";
import Title from "../Title/Title";
import NameProfil from "../NameProfil/NameProfil";
import Star from "../Star/Star";
import Tag from "../Tag/Tag";
import Collapse from "../Collapse/Collapse";
import CollapseEquipment from "../CollapseEquipment/CollapseEquipment";
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
          <div className="nameProfil">
            <div>
              <Title text={location.title} />
              <h4>{location.location}</h4>
            </div>
            <NameProfil name={location.host.name} img={location.host.picture} />
          </div>
          <div className="tag_star">
            <div>
              <Tag tags={location.tags} />
            </div>
            <div>
              <Star rating={location.rating} />
            </div>
          </div>

          <section className="description_equipement">
            <Collapse description={location.description} text="Description" />
            <CollapseEquipment
              equipment={location.equipments}
              text="Équipements"
            />
          </section>
        </div>
      );
    });
  return <div>{locations}</div>;
};

export default PageLocation;

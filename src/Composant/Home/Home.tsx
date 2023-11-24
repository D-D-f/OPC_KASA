import ContainerCard from "../ContainerCard/ContainerCard";
import ImgBanner from "../../assets/banner.png";
import Banner from "../Banner/Banner";

interface HomeProps {
  data: [];
}

const Home = ({ data }: HomeProps) => {
  return (
    <>
      <Banner text="Chez vous, partout et ailleurs" path={ImgBanner} />
      <ContainerCard data={data} />
    </>
  );
};

export default Home;

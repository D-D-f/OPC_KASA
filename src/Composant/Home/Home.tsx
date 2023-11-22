import ContainerCard from "../ContainerCard/ContainerCard";
import ImgBanner from "../../assets/banner.png";
import Banner from "../Banner/Banner";

interface HomeProps {
  data: { id: string; title: string; cover: string }[];
}

const Home = ({ data }: HomeProps) => {
  return (
    <>
      <Banner path={ImgBanner} />
      <ContainerCard data={data} />
    </>
  );
};

export default Home;

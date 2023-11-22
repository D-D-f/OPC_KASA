import ContainerCard from "../ContainerCard/ContainerCard";

interface HomeProps {
  data: { id: string; title: string }[];
}

const Home = ({ data }: HomeProps) => {
  return (
    <>
      <ContainerCard data={data} />
    </>
  );
};

export default Home;

import "./App.scss";
import Header from "./Composant/Header/Header";
import Footer from "./Composant/Footer/Footer";
import Banner from "./Composant/Banner/Banner";
import ImgBanner from "./assets/banner.png";
import ContainerCard from "./Composant/ContainerCard/ContainerCard";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const App = () => {
  const { data, error, isLoading } = useSWR("./public/data.json", fetcher);

  if (error) throw new Error("Unable to recover data");
  if (isLoading) return "Loading";

  return (
    <div className="page">
      <main className="App">
        <Header />
        <Banner path={ImgBanner} />
        <ContainerCard data={data} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

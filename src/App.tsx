import "./App.scss";
import Header from "./Composant/Header/Header";
import Footer from "./Composant/Footer/Footer";
import Banner from "./Composant/Banner/Banner";
import ImgBanner from "./assets/banner.png";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const App = () => {
  const { data, error } = useSWR("./public/data.json", fetcher);
  console.log(data);

  if (error) {
    throw new Error("Unable to recover data");
  }

  return (
    <div className="page">
      <main className="App">
        <Header />
        <Banner path={ImgBanner} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

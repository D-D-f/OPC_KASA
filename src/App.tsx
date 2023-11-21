import "./App.scss";
import Header from "./Composant/Header/Header";
import Footer from "./Composant/Footer/Footer";
import Banner from "./Composant/Banner/Banner";
import ImgBanner from "./assets/banner.png";

const App = () => {
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

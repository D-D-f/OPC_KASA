import "./Banner.scss";

interface BannerProps {
  path: string;
}

const Banner = ({ path }: BannerProps) => {
  const styleBanner = {
    backgroundImage: `url(${path})`,
    height: "225px",
    with: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "12px",
  };

  return (
    <div style={{ ...styleBanner }} className="banner">
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;

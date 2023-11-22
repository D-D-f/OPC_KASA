import "./Banner.scss";
interface BannerProps {
  path: string;
}

const Banner = ({ path }: BannerProps) => {
  return (
    <div
      style={{ "--linkImg": `url(${path})` } as React.CSSProperties}
      className="banner"
    >
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;

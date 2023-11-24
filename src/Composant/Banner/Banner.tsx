import "./Banner.scss";
interface BannerProps {
  path: string;
  text: string;
}

const Banner = ({ text, path }: BannerProps) => {
  return (
    <div
      style={{ "--linkImg": `url(${path})` } as React.CSSProperties}
      className="banner"
    >
      <h2>{text}</h2>
    </div>
  );
};

export default Banner;

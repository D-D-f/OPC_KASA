interface LogoProps {
  path: string;
  style: object;
}

const Logo = ({ path, style }: LogoProps) => {
  return <img style={style} src={path} alt="logo" />;
};

export default Logo;

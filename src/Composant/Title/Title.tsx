import "./Title.scss";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <h2 className="titlePageLoc">{text}</h2>;
};

export default Title;

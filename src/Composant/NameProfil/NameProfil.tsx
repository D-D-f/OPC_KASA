import "./NameProfil.scss";

interface NameProfilProps {
  name: string;
  img: string;
}

const NameProfil = ({ name, img }: NameProfilProps) => {
  const displayName = name.split(" ").map((name, index) => (
    <span key={index} className="spanName">
      {name}
    </span>
  ));

  return (
    <div className="name">
      <div>{displayName}</div>
      <img className="imgName" src={img} alt={name} />
    </div>
  );
};

export default NameProfil;

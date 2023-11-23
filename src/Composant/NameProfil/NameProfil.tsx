interface NameProfilProps {
  name: string;
  img: string;
}

const NameProfil = ({ name, img }: NameProfilProps) => {
  return (
    <div>
      <p>
        <span>{name}</span>
        <span></span>
      </p>
      <img src={img} alt={name} />
    </div>
  );
};

export default NameProfil;

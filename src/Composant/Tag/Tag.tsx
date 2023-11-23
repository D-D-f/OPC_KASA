import "./Tag.scss";

interface TagProps {
  tags: [];
}

const Tag = ({ tags }: TagProps) => {
  const tag = tags.map((tag, index) => (
    <div key={index} className="tag">
      <span>{tag}</span>
    </div>
  ));
  return <div className="tags">{tag}</div>;
};

export default Tag;

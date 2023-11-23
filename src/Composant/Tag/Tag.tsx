import "./Tag.scss";

interface TagProps {
  tags: [];
}

const Tag = ({ tags }: TagProps) => {
  const tag = tags.map((tag) => (
    <div className="tag">
      <span>{tag}</span>
    </div>
  ));
  return <div className="tags">{tag}</div>;
};

export default Tag;

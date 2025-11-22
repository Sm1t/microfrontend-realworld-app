export const TagList = ({ tags = [''] }) => (
  <div className="tag-list">
    {tags.map((tag, index) => (
      <a key={index} href="" className="tag-pill tag-default">
        {tag}
      </a>
    ))}
  </div>
);

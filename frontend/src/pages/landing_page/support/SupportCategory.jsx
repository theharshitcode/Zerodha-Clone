const SupportCategory = ({
  title,
  icon
}) => {
  return (
    <div className="support-category">

      <div className="category-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <span>⌄</span>

    </div>
  );
};

export default SupportCategory;
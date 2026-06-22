import "./ProductPage.css"
const Product = ({
  title,
  image,
  description,
  reverse
}) => {
  return (
    <section
      className={`product ${
        reverse ? "reverse" : ""
      }`}
    >

      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <a href="/">
          investment offerings →
        </a>
      </div>

    </section>
  );
};

export default Product;
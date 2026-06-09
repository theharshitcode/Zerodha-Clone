import ProductsHero from "./Hero";
// import Product from "./Product";
import products from "./productsData";
import OpenAccount from "../OpenAccount";
import "./ProductPage.css"

const ProductsPage = () => {
  return (
    <>
      <ProductsHero />

      {products.map(
        (product, index) => (
          <Product
            key={product.title}
            {...product}
            reverse={
              index % 2 !== 0
            }
          />
        )
      )}

      <OpenAccount />
    </>
  );
};

export default ProductsPage;
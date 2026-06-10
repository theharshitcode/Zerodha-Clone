import ProductsHero from "./Hero";
import Product from "./Product";
import products from "./productsData";
import Universe from "./Universe";
import OpenAccount from "../OpenAccount";

import "./ProductPage.css";

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

        <Universe />

      <OpenAccount />
    </>
  );
};

export default ProductsPage;
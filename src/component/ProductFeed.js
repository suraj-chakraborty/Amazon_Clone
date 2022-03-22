import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          id={id}
          price={price}
          title={title}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;

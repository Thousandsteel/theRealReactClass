import React from "react";
import ProductCard from "./Product.Card";

function TopRated({ product, style }) {
  return (
    <div
      className=""
      style={{
        marginBottom: 50,
      }}
    >
      <p className="" style={{ fontSize: 24, color: "red", padding: 10 }}>
        Top Rated
      </p>
      <div style={style}>
        {product
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3)
          .map((item, i) => {
            return (
              <ProductCard
                image={item.images[0]}
                description={item.description}
                price={item.price}
                key={i}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default TopRated;

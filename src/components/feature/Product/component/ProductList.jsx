import React from "react";
import ProductCard from "./ProductCard";
import "../../../../assets/css/product_list.css";

const ProductList = ({ products }) => {
  const renderContent = products.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <ProductCard data={item} />
      </React.Fragment>
    );
  });
  return (
    // <div className="product_list_container">
    <div className="product_list">{renderContent}</div>
    // </div>
  );
};

export default ProductList;

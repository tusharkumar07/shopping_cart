import React, { useEffect, useState } from "react";
import "../../assets/css/home.css";
import home_mainBg from "../../assets/img/home_mainBg.webp";
import ProductCart from "../feature/Product/component/ProductCard";
import LinkButton from "../ui/button/LinkButton";
import ReasonBox from "./ReasonBox";
import useFeatureProduct from "./useFeaturedProduct";

const landing_page_style = {
  background: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${home_mainBg})`,
};

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const { featuredProduct } = useFeatureProduct();

  const renderFeatureProduct = featuredProduct.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <ProductCart data={item} />
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className="landing_page" style={landing_page_style}>
        <div className="container">
          <div className="landing_page_text">
            <h1>
             
              the <span>Maeve Sofa bed,</span>,
            </h1>
            <h1>now in premium velvet fabric.</h1>
            <LinkButton path="/products/5" label="Shop Now Here" />
          </div>
        </div>
      </div>
      <div className="featured_product">
        <div className="container">
          <div className="featured_product_title">
            <h1>Featured Products</h1>
          </div>
          <div className="featured_product_items">{renderFeatureProduct}</div>
          <div className="featured_product_btn">
            <LinkButton path="/products" label="See All Products" />
          </div>
        </div>
      </div>

      <div className="reason">
        <div className="container">
          <div className="reason_title">
            <h1>Reasons to Shop at Us</h1>
          </div>
          <div className="reason_items">
            <ReasonBox
              icon={<i className="fa-regular fa-face-kiss-wink-heart"></i>}
              title="Loved by Everyone"
            />
            <ReasonBox
              icon={<i className="fa-solid fa-jet-fighter-up"></i>}
              title="Fast Delivery"
            />
            <ReasonBox
              icon={<i className="fa-solid fa-tags"></i>}
              title="Discounted Items"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

import { useEffect, useState } from "react";
import furniture_data from "../../data/data";

const useFeatureProduct = () => {
  const cart = furniture_data;
  const [featuredProduct, setFeaturedProduct] = useState([]);

  useEffect(() => {
    let selected = [];

    while (selected.length < 3) {
      let randomIndex = Math.floor(Math.random() * cart.length);
      selected.push(cart[randomIndex]);
    }

    setFeaturedProduct(selected);
  }, []);

  return { featuredProduct };
};

export default useFeatureProduct;

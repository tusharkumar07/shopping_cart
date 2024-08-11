import { useEffect, useState } from "react";
import furniture_data from "../../../../data/data";

const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    findItem();
  }, []);

  const findItem = () => {
    const foundItem = furniture_data.find((item) => {
      return item.id === parseInt(id);
    });
    setProduct(foundItem);
  };

  return { product };
};

export default useSingleProduct;

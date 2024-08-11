import { useEffect, useState } from "react";

import furniture_data from "../../../../data/data";

export const useProduct = () => {
  const [products, setProdcuts] = useState([]);

  useEffect(() => {
    setProdcuts(furniture_data);
  }, []);

  return { products };
};

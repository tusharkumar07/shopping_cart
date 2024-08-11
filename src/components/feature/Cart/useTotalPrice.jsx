import { useEffect, useState } from "react";
import totalPrice from "./utils/totalPrice";

const useTotalPrice = (cart) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const allPrice = totalPrice(cart);
    setTotal(allPrice);
  });

  return { total };
};

export default useTotalPrice;

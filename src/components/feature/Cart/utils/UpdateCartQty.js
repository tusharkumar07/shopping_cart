import { setCart } from "../../../../services/storage";

const updateCartQty = (id, cart, qty) => {
  const newArr = [...cart];
  const index = newArr.findIndex((i) => i.id === id);
  newArr[index].quantity = qty;
  newArr[index].subTotal =
    parseInt(newArr[index].price) * newArr[index].quantity;
  setCart("cart", newArr);

  return newArr[index].subTotal;
};

export default updateCartQty;

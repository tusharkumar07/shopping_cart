const totalPrice = (cart) => {
  let price = 0;

  for (let items of cart) {
    price += items.subTotal;
  }

  return price;
};

export default totalPrice;

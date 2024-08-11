const getCart = () => {
  const cart = JSON.parse(window.localStorage.getItem("cart"));
  return cart;
};

const setCart = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};

const deleteCart = (name) => {
  const arr = [];
  window.localStorage.setItem(name, JSON.stringify(arr));
};

const checkCartItem = (id) => {
  try {
    const cart = getCart();
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    return cartItem ? cartItem : null;
  } catch (ex) {
    return null;
  }
};

export { checkCartItem, deleteCart, setCart, getCart };
